var db = require("../db/db");
exports.GetAll = () => {
  var sql = `select * from the_loai`;
  return db.load(sql);
};
exports.GetByID = ID => {
  var sql = `select * from the_loai where ID = ${ID}`;
  return db.load(sql);
};
exports.Update = theloai => {
    var sql = `update the_loai
    set Ten = '${theloai.Ten}',
    TenKhongDau = '${theloai.TenKhongDau}'
    where ID = ${theloai.ID}`
    return db.save(sql)
};

exports.Add = theloai =>{
    var sql = `insert into the_loai
    set Ten = '${theloai.Ten}',
    TenKhongDau = '${theloai.TenKhongDau}'`
    return db.save(sql)
}
exports.delete = (ID)=>{
  var sql =` delete from the_loai where ID = ${ID}`
  return db.save(sql)
}