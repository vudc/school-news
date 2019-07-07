var express = require("express");
var UserRepos = require("../repos/UserRepos");
var router = express.Router();
var layout = "_admin.handlebars";
router.get("/", (req, res) => {
  UserRepos.GetAll().then(result => {
    var vm = {
      layout: layout,
      list_User: result
    };
    return res.render("Admin/User/index", vm);
  });
});

router.get("/edit/:ID", (req, res) => {
  UserRepos.GetOne(req.params.ID).then(r => {
    var vm = {
      user: r[0],
      layout: layout
    };
    return res.render("Admin/User/edit", vm);
  });
});

router.post("/edit", (req, res) => {
  UserRepos.Update(req.body).then(r=>{
    return res.redirect('/admin/user');
  })
});
router.post('/delete',(req,res)=>{
  UserRepos.delete(req.body.ID).then(r=>{
    return res.redirect('/admin/user');
  })
})
module.exports = router;
