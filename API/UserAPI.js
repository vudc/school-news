var express = require('express')
var UserRepos = require('../repos/UserRepos')
var router = express.Router();
router.get('/GETTrueList',(req,res)=>{
    UserRepos.GET_ListUserByUsername(req.query.Email).then(result => {
        var data = [];
        for (var i = 0; i < result.length; i++) {
            data.push(result[i].Email)
        }
        return res.end(JSON.stringify(data));
    }).catch(err => {
        return res.end(err);
    })
})

module.exports = router