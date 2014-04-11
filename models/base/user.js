/**
 * Created by Henry.Cui on 13-12-9.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username:{type:String,index:true,unique:true},
    email:{type:String,unique:true},
    type:{type:String},
    password:{type:String},
    mobile:{type:String},
    avatar:{type:String},
    create_at:{type:Date},
    update_at:{type:Date},
    active:{type:Boolean,default:true},
    status:{type:String,default:'normal'},
    token:{type:String},
    remark:{type:String}
});

mongoose.model('User', UserSchema);
