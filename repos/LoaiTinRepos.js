var db = require("../db/db");
exports.GetAll = () => {
  var sql = `select * from loai_tin`;
  return db.load(sql);
};
exports.GetAll_List = () => {
  var sql = `select 
  the_loai.ID as theloaiID,
  loai_tin.ID as loaitin_ID,
  loai_tin.Ten as loaitin_Ten,
  loai_tin.TenKhongDau as loaitin_TKD,
  the_loai.Ten as theloai_Ten
  from loai_tin,the_loai
  where loai_tin.the_loai_ID = the_loai.ID`;
  return db.load(sql);
};

exports.GetList = (theloai, loaitin,offset) => {
    var sql = `select * 
    from tin_tuc, the_loai, loai_tin
    where  tin_tuc.Loai_tin_ID = loai_tin.ID and the_loai.ID = loai_tin.the_loai_ID and the_loai.TenKhongDau = '${theloai}' 
    and loai_tin.TenKhongDau = '${loaitin}' limit 3 offset ${offset}`
    return db.load(sql)
};
exports.Add = (loaitin) =>{
  var sql = `insert into loai_tin
  set Ten = '${loaitin.Ten}',
  TenKhongDau = '${loaitin.TenKhongDau}',
  the_loai_ID = ${loaitin.the_loai_ID}
  `
  return db.save(sql)
}

exports.GetByID = ID => {
  var sql = `select * from loai_tin where ID = ${ID}`;
  return db.load(sql);
};

exports.Upadte = (loaitin) =>{
  var sql = `update loai_tin
  set Ten = '${loaitin.Ten}',
  TenKhongDau = '${loaitin.TenKhongDau}',
  the_loai_ID = ${loaitin.the_loai_ID}
  where ID = ${loaitin.ID}
  `
  return db.save(sql)
}
exports.delete = (ID)=>{
  var sql = `delete from loai_tin where ID = ${ID}`
  console.log(sql)
  return db.save(sql)
}