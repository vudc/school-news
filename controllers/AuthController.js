var express = require("express");
var Passport = require("passport");
var moment = require("moment");
var UserRepos = require("../repos/UserRepos");
var router = express.Router();
var ProfileMiddleware = require("../middle-wares/profile");
router.get("/login", (req, res) => {
  if (req.user) {
    return res.redirect("/Auth/profile");
  }
  var vm = {
    title: "Đăng nhập"
  };
  res.render("Auth/login", vm);
});

router.get("/register", (req, res) => {
  var vm = {
    title: "Đăng ký"
  };
  res.render("Auth/register", vm);
});
/*  */
router.post("/register", (req, res) => {
  UserRepos.AddOne(req.body).then(r => {
    res.render("Auth/register", { RegisterSuccess: true });
  });
});

router.get("/profile", ProfileMiddleware.CheckProfile, (req, res) => {
  var user = req.user;
  user.CreateDate = moment(user.CreateDate).format("DD/MM/YYYY");
  var vm = {
    title: "Thông tin cá nhân",
    user: user
  };
  res.render("Auth/profile", vm);
});

router.post("/login", function(req, res, next) {
  Passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/auth/login");
    }
    req.logIn(user, function(err) {
      // <-- Log user in
      return res.redirect("/");
    });
  })(req, res, next);
});

router.get("/unauthorized", (req, res) => {
  res.render("Auth/unauthorized");
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/auth/login");
});
module.exports = router;
