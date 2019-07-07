var https = require('http');
require('dotenv').config();
var express = require('express');
//var config = require('./config/config')
var app = express();
var session = require('express-session');
var Passport = require('passport');
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');
var handleLayoutMDW = require('./middle-wares/handleLayout');
var HomeController = require('./controllers/HomeController');
var UserAPI = require('./API/UserAPI')
var AuthController = require('./controllers/AuthController');
var TinTucController = require('./controllers/TinTucController')
var CatalogController = require('./controllers/CatalogController');
var AdminLoaiTin = require('./AdminArea/LoaiTinController')
var AdminTheLoai = require('./AdminArea/TheLoaiController')
var AdminComment = require('./AdminArea/CommentController')
var AdminUser = require('./AdminArea/UserController')
var AdminFile = require('./AdminArea/FileController')
var AdminTinTuc = require('./AdminArea/TinTucController')
require('./config/Passport')(Passport); 
app.engine('hbs', exphbs({
    defaultLayout: '_public',
    layoutsDir: 'Views/Layout/',
    partialsDir: 'Views/partials/',
    helpers: {
        section: express_handlebars_sections(),
    }
}));

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'Views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use(session({       
    secret: process.env.SECRET_KEY,
    cookie: {
        maxAge: 86400000 * 365
    }
}));
app.use(Passport.initialize());
app.use(Passport.session());

app.use(handleLayoutMDW);
app.use('/',HomeController);
app.use('/tin-tuc',TinTucController);

app.use('/auth',AuthController);
app.use('/loai-tin',CatalogController)
app.use('/admin/the-loai',AdminTheLoai);
app.use('/admin/comment',AdminComment)
app.use('/admin/user',AdminUser)
app.use('/admin/tin-tuc',AdminTinTuc)
app.use('/admin/loai-tin',AdminLoaiTin);
app.use('/API/user',UserAPI);
app.use('/admin/file',AdminFile)
var server = https.createServer(app).listen(process.env.PORT, function() {
    console.log('Https App started');
});
// console.log('Starting app with config:', process.env);
// app.listen(process.env.PORT, () => {
//     console.log('Site running on port ' + process.env.PORT);
// });