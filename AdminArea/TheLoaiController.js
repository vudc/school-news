var express = require("express");
var TheLoaiRepos = require("../repos/TheLoaiRepos");
var router = express.Router();
var layout = "_admin.handlebars";
router.get("/", (req, res) => {
  TheLoaiRepos.GetAll().then(result => {
    var vm = {
      layout: layout,
      list_TheLoai: result
    };
    return res.render("Admin/TheLoai/index", vm);
  });
});

router.get("/edit/:ID", (req, res) => {
  TheLoaiRepos.GetByID(req.params.ID).then(r => {
    var vm = {
      theloai: r[0],
      layout: layout
    };
    return res.render("Admin/TheLoai/edit", vm);
  });
});

router.post("/edit", (req, res) => {
  TheLoaiRepos.Update(req.body).then(r=>{
    return res.redirect('/admin/the-loai');
  })
});

router.get('/add',(req,res)=>{
  var vm = {
    layout:layout
  }
  return res.render('Admin/TheLoai/add',vm);
})
router.post('/add',(req,res)=>{
  TheLoaiRepos.Add(req.body).then(r=>{
    return res.redirect('/admin/the-loai');
  })
})

router.post('/delete',(req,res)=>{
  TheLoaiRepos.delete(req.body.ID).then(r=>{
    return res.redirect('/admin/the-loai');
  })
})
module.exports = router;
