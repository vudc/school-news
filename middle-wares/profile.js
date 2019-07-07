module.exports = {
    CheckProfile: function (req, res, next){
    if (!req.user) {
        return res.redirect('/auth/login');
    }
    var Email = req.user.Email;
    res.locals.layoutMDW.Email = Email;
    next();
}
}