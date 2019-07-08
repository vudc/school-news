var db = require("../db/db");
exports.CountAllByLoaiTin = (TheLoai,loaiTin) => {
  var sql = `select count(*) as AllBlog 
  from tin_tuc,loai_tin,the_loai
  where the_loai.ID = loai_tin.the_loai_ID and loai_tin.ID = tin_tuc.loai_tin_ID and the_loai.TenKhongDau = '${TheLoai}' and
  loai_tin.TenKhongDau = '${loaiTin}'`;
  return db.load(sql);
};
exports.GetAll = () =>{
  var sql = `select 
    tin_tuc.TieuDe as TieuDe, 
    tin_tuc.Hinh as Hinh,
    tin_tuc.TieuDeKhongDau as TieuDeKhongDau,
    tin_tuc.TomTat as Tomtat,
    tin_tuc.ID as ID,
    loai_tin.Ten as LoaiTin_Ten,
    loai_tin.TenKhongDau as LoaiTin_TKD,
    the_loai.Ten as TheLoai_Ten,
    tin_tuc.CreateAt as CreateAt,
    the_loai.TenKhongDau as TheLoai_TKD
    from tin_tuc, the_loai, loai_tin
    where  tin_tuc.Loai_tin_ID = loai_tin.ID and the_loai.ID = loai_tin.the_loai_ID  
     order by tin_tuc.CreateAt DESC `;
  return db.load(sql);
}
exports.GetList = offset => {
  var sql = `select 
    tin_tuc.TieuDe as TieuDe, 
    tin_tuc.Hinh as Hinh,
    tin_tuc.TieuDeKhongDau as TieuDeKhongDau,
    tin_tuc.TomTat as Tomtat,
    tin_tuc.ID as ID,
    loai_tin.Ten as LoaiTin_Ten,
    loai_tin.TenKhongDau as LoaiTin_TKD,
    the_loai.Ten as TheLoai_Ten,
    tin_tuc.CreateAt as CreateAt,
    the_loai.TenKhongDau as TheLoai_TKD
    from tin_tuc, the_loai, loai_tin
    where  tin_tuc.Loai_tin_ID = loai_tin.ID and the_loai.ID = loai_tin.the_loai_ID  
     order by tin_tuc.CreateAt DESC limit ${offset} `;
  return db.load(sql);
};

exports.GetOne = (TieuDe) => {
  var sql = `select 
      tin_tuc.TieuDe as TieuDe, 
      tin_tuc.ID as ID,
      tin_tuc.TieuDeKhongDau as TieuDeKhongDau,
      tin_tuc.TomTat as Tomtat,
      loai_tin.Ten as LoaiTin_Ten,
      user.Name as CreateBy,
      tin_tuc.NoiDung as NoiDung,
      loai_tin.TenKhongDau as LoaiTin_TKD,
      the_loai.Ten as TheLoai_Ten,
      loai_tin.ID as loai_tin_ID,
      tin_tuc.CreateAt as CreateAt,
      the_loai.TenKhongDau as TheLoai_TKD
      from tin_tuc, the_loai, loai_tin,user
      where  tin_tuc.Loai_tin_ID = loai_tin.ID and user.ID = tin_tuc.user_ID
      and the_loai.ID = loai_tin.the_loai_ID  and tin_tuc.TieuDeKhongDau = '${TieuDe}'
        limit 1 `;
  return db.load(sql);
};
exports.GETByloai_tin_ID = (loai_tin_ID) =>{
    var sql = `select 
    tin_tuc.TieuDe as TieuDe, 
    tin_tuc.TieuDeKhongDau as TieuDeKhongDau,
    tin_tuc.TomTat as Tomtat,
    tin_tuc.Hinh as Hinh,
    loai_tin.Ten as LoaiTin_Ten,
    loai_tin.TenKhongDau as LoaiTin_TKD,
    the_loai.Ten as TheLoai_Ten,
    loai_tin.ID as loai_tin_ID,
    tin_tuc.CreateAt as CreateAt,
    the_loai.TenKhongDau as TheLoai_TKD
    from tin_tuc, the_loai, loai_tin
    where  tin_tuc.Loai_tin_ID = loai_tin.ID and the_loai.ID = loai_tin.the_loai_ID  and tin_tuc.loai_tin_ID = ${loai_tin_ID}
      limit 4 `;
return db.load(sql);
}
exports.AddNew = (tintuc)=>{
  var sql = `  insert into tin_tuc(TieuDe,TieuDeKhongDau, TomTat, NoiDung,loai_tin_ID,Hinh,user_ID)
  values('${tintuc.TieuDe}','${tintuc.TieuDeKhongDau}','${tintuc.TomTat}','${tintuc.NoiDung}',${tintuc.loai_tin_ID},'${tintuc.Hinh}',${tintuc.user_ID})`
  console.log(sql)
  return db.save(sql)
}
exports.delete = (ID)=>{
  var sql = `delete from tin_tuc where ID = ${ID}`
  return db.save(sql)
}