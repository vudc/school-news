var express = require("express");
var LoaiTinRepos = require("../repos/LoaiTinRepos");
var TheLoaiRepos = require("../repos/TheLoaiRepos");
var router = express.Router();
var layout = "_admin.handlebars";
router.get("/", (req, res) => {
  LoaiTinRepos.GetAll_List().then(result => {
    var vm = {
      layout: layout,
      list_LoaiTin: result
    };
    return res.render("Admin/LoaiTin/index", vm);
  });
});

router.get("/edit/:ID", (req, res) => {
  var theloai = TheLoaiRepos.GetAll();
  var loaitin = LoaiTinRepos.GetByID(req.params.ID);
  Promise.all([theloai, loaitin]).then(([r_theloai, r_loaitin]) => {
    var vm = {
      theloai: r_theloai,
      loaitin: r_loaitin[0],
      layout: layout
    };
    console.log(loaitin)
    return res.render("Admin/LoaiTIn/edit", vm);
  });
});

router.post("/edit", (req, res) => {
  LoaiTinRepos.Update(req.body).then(r => {
    return res.redirect("/admin/loai-tin");
  });
});

router.get("/add", (req, res) => {
  TheLoaiRepos.GetAll().then(r => {
    var vm = {
      layout: layout,
      list_theloai: r
    };
    return res.render("Admin/LoaiTin/add", vm);
  });
});
router.post("/add", (req, res) => {
  LoaiTinRepos.Add(req.body).then(r => {
    return res.redirect("/admin/loai-tin");
  });
});

router.post('/delete',(req,res)=>{
    LoaiTinRepos.delete(req.body.ID).then(r=>{
        return res.redirect("/admin/loai-tin");
    })
})
module.exports = router;
