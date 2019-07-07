var db = require('../db/db')
exports.getByTinTucID = (tintucID)=>{
    var sql = `select 
    user.Name as Name,
    comment.CreateAt as CreateAt,
    comment.NoiDung as NoiDung
    from comment,user
    where tin_tuc_ID = ${tintucID} and user.ID = comment.user_ID`
    return db.load(sql)
}
exports.Add = (NoiDung, user_ID, tin_tuc_ID) =>{
    var sql = `insert into comment 
    set NoiDung = '${NoiDung}',
    user_ID = ${user_ID},
    tin_tuc_ID = ${tin_tuc_ID}`
    return db.save(sql)
}