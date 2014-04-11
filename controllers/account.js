
var models = require('../models'),
    User = models.User;
var proxies = require('../proxy'),
    UserProxy = proxies.UserProxy;
var md5 = require('MD5');
/**
 * Show user login page.
 *
 * @param  {HttpRequest} req
 * @param  {HttpResponse} res
 */
exports.showLogin=function(req,res){
    res.render('account/login')
};


exports.login=function(req,res,next){
    var username =req.body.username;
    var password = req.body.password;
    UserProxy.getUserByUserName(username,function(err,user){
        if(err) next(err);
        if(!user){
            return res.render('account/login',{err:'输入的用户名不存在！'});
        }
        if(user.password!==md5Encipher(password)){
            return res.render('account/login',{err:'输入的用户名与密码不存在！'});
        }
        req.session.user = user;
        res.redirect('/');
    });
};

/**
 * Show user register page.
 *
 * @param  {HttpRequest} req
 * @param  {HttpResponse} res
 */
exports.showRegister=function(req,res){
    res.render('account/register')
};

/**
  * 用户注册 post
  * */
exports.register=function(req,res,next){
    var user = new User();
    user.username = req.body.username;
    user.password = md5Encipher(req.body.password);
    user.email = req.body.email;
    UserProxy.newAndSave(user,function(err){
        if(err){
            next(err);
        }
        res.redirect('/');
    });
};

/**
 * 是否已经注册 get
 * */
exports.isRegister=function(req,res,next){
    var username = req.param('username');
    var email = req.param('email');
    if(username){
         UserProxy.getUserByUserName(username,function(err,user){
             if(err) {res.json(false);return;}
             if(user) {res.json(false);return;}
             res.json(true);
         })
    }
    if(email){
        UserProxy.getUserByMail(email,function(err,user){
            if(err) {res.json(false);return;}
            if(user) {res.json(false);return;}
            res.json(true);
        })
    }
};

//private methods
function md5Encipher(str){
    return md5(str);
}







