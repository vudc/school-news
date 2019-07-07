var express = require("express");
var LoaiTinRepos = require("../repos/LoaiTinRepos");
var TheLoaiRepos = require("../repos/TheLoaiRepos");
var TinTucRepo = require("../repos/TinTucRepos");
var router = express.Router();
var Blog_per_page = 3;
router.get("/:the_loai/:loai_tin", (req, res) => {
  var page = req.query.page;
  if (!page) {
    page = 1;
  }
  var offset = (page - 1) * Blog_per_page;
  var p1 = LoaiTinRepos.GetList(req.params.the_loai, req.params.loai_tin,offset);
  var l_TheLoai = TheLoaiRepos.GetAll();
  var l_LoaiTin = LoaiTinRepos.GetAll();
  var p2 = TinTucRepo.CountAllByLoaiTin(req.params.the_loai,req.params.loai_tin);

  Promise.all([p1, p2, l_TheLoai, l_LoaiTin]).then(
    ([r, c_blog, r_TheLoai, r_LoaiTin]) => {
      var TotalBlog = c_blog[0].AllBlog;
      var nPages = TotalBlog / Blog_per_page;
      if (TotalBlog % Blog_per_page) {
        nPages++;
      }
      var numbers = [];
      for (var i = 1; i <= nPages; i++) {
        numbers.push({
          value: i,
          isCurrentPage: i === +page
        });
      }

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

      var vm = {
        list_blog: r,
        menu: r_TheLoai,
        title: "Danh sách bài viết",
        page_number: numbers,
        the_loai:req.params.the_loai,
        loai_tin:req.params.loai_tin,
      };
      return res.render("Catalog/index", vm);
    }
  );
});
module.exports = router;
