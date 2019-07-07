module.exports = (req, res, next) => {
    var FullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    //get URL to redirect auth/login
    var currentURL = "";
    if (req.originalUrl.indexOf('?redirect=') !== -1) {

        var split_URL = req.originalUrl.split('?redirect=');
        currentURL = split_URL[split_URL.length - 1];

    }else {
        currentURL = req.originalUrl
    }
    var isLogin = false;
    var Name = "";
    if (req.user) {
        isLogin = true;
        Name = req.user.Name;
    }
    res.locals.layoutMDW = {
        currentURL: currentURL ,
        FullUrl: FullUrl,
        isLogin: isLogin,
        Name: Name,
    }
    next();
}