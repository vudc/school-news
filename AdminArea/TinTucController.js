var express = require('express');
var multer = require('multer');
var path = require('path');
var TinTucRepos = require('../repos/TinTucRepos');
var LoaiTinRepos = require('../repos/LoaiTinRepos')
var router = express.Router();
var crypto = require('crypto');
//admin layout
var layout = '_admin.handlebars';
//storage config in multer
var storage = multer.diskStorage({
    //folder upload -> public/upload
    destination: './public/upload/feature',
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err)
            cb(null, Math.floor(Math.random() * 9000000000) + 1000000000 + path.extname(file.originalname))
        })
    }
});
var upload = multer({ storage: storage });

router.get('/', (req, res) => {
  TinTucRepos.GetAll().then(listBlog => {
        var vm = {
            layout: layout,
            title: '',
            listBlog: listBlog
        }
        return res.render('Admin/TinTuc/index', vm);
    })
})

router.get('/add',(req, res) => {
    LoaiTinRepos.GetAllEx().then(r=>{
        var vm = {
            layout: layout,
            title: '',
            list_loaitin:r
        }
        return res.render('Admin/TinTuc/add', vm);
    })
    
})
router.post('/add',upload.single('FileImage'), function (req, res) {
    var blog = req.body;
    blog.TieuDe = blog.TieuDe.replace(/'/g, "\\\'");
    blog.NoiDung = blog.NoiDung.replace(/'/g, "\\\'");
    blog.TomTat = blog.TomTat.replace(/'/g, "\\\'");
    console.log(blog.TomTat)
    blog.Hinh = req.file.filename
    blog.user_ID = req.user.ID
    TinTucRepos.AddNew(blog).then(r => {
        res.redirect('/admin/tin-tuc');
    }).catch(err => {
        res.send(err);
    })
})
router.post('/delete',(req,res)=>{
    TinTucRepos.delete(req.body.ID).then(r=>{
      return res.redirect('/admin/tin-tuc');
    })
  })
router.get('/edit/:blogID', (req, res) => {
    BlogRepos.GETOne(req.params.blogID).then(result => {
        if (result) {
            var vm = {
                layout: layout,
                title: '',
                blog: result[0]
            }
            res.render('Admin/Blog/edit', vm);
        }
    })
})

router.post('/edit', upload.single('FileImage'), (req, res) => {
    var isNewImage = false;
    var ImageURL = '';
    if (req.file) {
        isNewImage = true;
        ImageURL = req.file.filename;
    }
    var blog = req.body;
    blog.Title = blog.Title.replace(/'/g, "\\\'");
    blog.Description = blog.Description.replace(/'/g, "\\\'");
    blog.Category = blog.Category.replace(/'/g, "\\\'");
    blog.Content = blog.Content.replace(/'/g, "\\\'");
    BlogRepos.Edit(blog.ID, blog.Title, blog.MetaTitle, blog.Description,
        blog.Content, blog.Tag, blog.Category, isNewImage, ImageURL).then(r => {
            res.redirect('/admin/blog');
        }).catch(err => {
            res.send(err);
        })
})

module.exports = router;
