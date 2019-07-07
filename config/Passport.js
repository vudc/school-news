var UserRepos = require('../repos//UserRepos');
var LocalStrategy = require('passport-local').Strategy;
module.exports = function (passport) {


    passport.use(new LocalStrategy(
        (username, password, done) => {
            
            UserRepos.CheckLogin(username, password).then(result => {
                //console.log(result)
                if (result.length > 0) {
                    console.log(result[0])
                    return done(null, result[0]);
                }
                return done(null, false);
            })
            // request({
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },   
            //     url: process.env.ROOT + '/api/user/checklogin',
            //     method: "POST",
            //     json: true,
            //     body: {
            //         username: username,
            //         password: password
            //     }
            // }, function (error, response, body) {
            //     if (error) { done(error); }
            //     var result = response.body;
            //     if (result.length > 0) {
            //         return done(null, result[0]);
            //     }
            //     return done(null, false);
            // });
        }
    ))
    passport.serializeUser(function (user, done) {
        return done(null, user.Email);
    });

    passport.deserializeUser(function (Username, done) {
        UserRepos.deserialize(Username).then(result => {
            if (result.length > 0) {
                return done(null, result[0]);
            }
            return done(null, false);
        })
        // request({
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     url: process.env.ROOT + '/api/user/checklogin',
        //     method: "POST",
        //     json: true,
        //     body: {
        //         username: Username,
        //         password: ''
        //     }
        // }, function (error, response, body) {
        //     if (error) { console.log(error); }
        //     var result = response.body;
        //     if (result.length > 0) {
        //         return done(null, result[0]);
        //     }
        //     return done(null, false);
        // });
    });
}