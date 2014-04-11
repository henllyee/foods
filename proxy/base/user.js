/**
 * Created by Administrator on 13-12-27.
 */
/**
 * Created by Administrator on 13-12-27.
 */
var models = require('../../models')
var User = models.User;

/**
 * 根据登录名查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} username 用户名
 * @param {Function} callback 回调函数
 */
exports.getUserByUserName=function(username,callback){
    User.findOne({username:username},callback);
}

/**
 * 根据邮箱查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} email 邮箱
 * @param {Function} callback 回调函数
 */
exports.getUserByMail=function(email,callback){
    User.findOne({email:email},callback);
}

/**
 * 保存新用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {User} user 用户对象
 */
exports.newAndSave=function(user,callback){
    user.save(callback);
}