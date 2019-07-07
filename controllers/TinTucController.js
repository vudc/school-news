var express = require("express");
var LoaiTinRepos = require("../repos/LoaiTinRepos");
var TheLoaiRepos = require("../repos/TheLoaiRepos");
var CommentRepos = require("../repos/CommentRepos");
var TinTucRepo = require("../repos/TinTucRepos");
var moment = require("moment");
moment.locale("vi");
var router = express.Router();
router.get("/:TieuDe", (req, res) => {
  TinTucRepo.GetOne(req.params.TieuDe).then(async r => {
    r[0].CreateAt = moment(r[0].CreateAt).fromNow();
    var lienquan = TinTucRepo.GETByloai_tin_ID(r[0].loai_tin_ID);
    var noibat = TinTucRepo.GetList(4);
    var comment = CommentRepos.getByTinTucID(r[0].ID);
    var LienQuan;
    var NoiBat;
    var list_Comment;
    await Promise.all([lienquan, noibat, comment]).then(
      ([r_lienquan, r_noibat, r_comment]) => {
        LienQuan = r_lienquan;
        NoiBat = r_noibat;
        for (var i = 0; i < r_comment.length; i++) {
          r_comment[i].CreateAt = moment(r_comment[i].CreateAt).fromNow();
        }
        list_Comment = r_comment;
      }
    );
    var vm = {
      tin_tuc: r[0],
      LienQuan: LienQuan,
      NoiBat: NoiBat,
      comment: list_Comment
    };
    return res.render("TinTuc/index", vm);
  });
});

router.post("/comment", (req, res) => {
  CommentRepos.Add(req.body.NoiDung, req.user.ID, req.body.tin_tuc_ID).then(
    r => {
      return res.redirect('/tin-tuc/' +req.body.url);
    }
  );
});
module.exports = router;
