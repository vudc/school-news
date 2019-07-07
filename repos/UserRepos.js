var db = require('../db/db');
exports.CheckLogin = (Email, password) => {
    var sql = `select * from user where Email = '${Email}' and Password like binary '${password}'`
    console.log(sql)
    return db.load(sql)
}
exports.deserialize = (username) => {
    var sql = `select * from user where Email = '${username}'`;
    return db.load(sql)
}
exports.GET_ListUserByUsername = (key) => {
    var sql = `select * from user where Email = '${key}' LIMIT 1`;
    return db.load(sql);
}

exports.AddOne = (user) => {
    var sql = `INSERT INTO user 
            SET Name = '${user.Name}',
                Password = '${user.Password}',
                Email = '${user.Email}'`;
    return db.save(sql);
}
exports.GetAll = ()=>{
    var sql = `select * from user`
    return db.load(sql)
}
exports.Update = (user)=>{
    var sql = `update user 
    SET Name = '${user.Name}',
    Email = '${user.Email}'
    where ID = ${user.ID}`;
    return db.save(sql)
}

exports.GetOne = (ID)=>{
    var sql = `select * from user where ID = ${ID}`
    return db.load(sql)
}
exports.delete =(ID)=>{
    var sql = `delete from user where ID = ${ID}`
    return db.save(sql)
}