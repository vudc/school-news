var express = require("express");
var moment = require("moment");
moment.locale('vi')
var LoaiTinRepos = require("../repos/LoaiTinRepos");
var TinTucRepos = require("../repos/TinTucRepos");
var TheLoaiRepos = require("../repos/TheLoaiRepos");
function to_Theloai(r_TheLoai, r_LoaiTin) {
  for (var i = 0; i < r_TheLoai.length; i++) {
    var list_now_LoaiTin = [];
    for (var j = 0; j < r_LoaiTin.length; j++) {
      if (r_LoaiTin[j].the_loai_ID === r_TheLoai[i].ID) {
        var now_LoaiTin = {
          Ten: r_LoaiTin[j].Ten,
          TenKhongDau: r_LoaiTin[j].TenKhongDau
        };
        list_now_LoaiTin.push(now_LoaiTin);
      }
    }
    r_TheLoai[i].LoaiTin = list_now_LoaiTin;
  }
  return r_TheLoai;
}
var router = express.Router();
router.get("/", (req, res) => {
  var l_TheLoai = TheLoaiRepos.GetAll();
  var l_LoaiTin = LoaiTinRepos.GetAll();
  var l_TinTuc = TinTucRepos.GetList(7);
  Promise.all([l_TheLoai, l_LoaiTin, l_TinTuc]).then(
    ([r_TheLoai, r_LoaiTin, r_TinTuc]) => {
      for (var i = 0; i < r_TinTuc.length; i++) {
        r_TinTuc[i].CreateAt = moment(r_TinTuc[i].CreateAt).fromNow();
      }
      var vm = {
        list_TinTuc: r_TinTuc,
        menu: to_Theloai(r_TheLoai, r_LoaiTin)
      };
      return res.render("Home/index", vm);
    }
  );
  // .catch(err => {
  //   res.end(err);
  // });
});

router.get("/contact", (req, res) => {
  var l_TheLoai = TheLoaiRepos.GetAll();
  var l_LoaiTin = LoaiTinRepos.GetAll();
  Promise.all([l_TheLoai, l_LoaiTin]).then(([r_TheLoai, r_LoaiTin]) => {
    var vm = {
      menu: to_Theloai(r_TheLoai, r_LoaiTin)
    };
    return res.render("Home/contact", vm);
  });
});
router.get("/about", (req, res) => {
  var l_TheLoai = TheLoaiRepos.GetAll();
  var l_LoaiTin = LoaiTinRepos.GetAll();
  Promise.all([l_TheLoai, l_LoaiTin]).then(([r_TheLoai, r_LoaiTin]) => {
    var vm = {
      menu: to_Theloai(r_TheLoai, r_LoaiTin)
    };
    return res.render("Home/about", vm);
  });
});
module.exports = router;
