/**
 * Created by Administrator on 2014/4/6.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var WorkFlow = new Schema({
    status:{type:String},
    make_date:{type:Date},
    oper_person:{type:ObjectId}
});

var StoreAuthSchema=new Schema({
    person_name:{type:String,index:true},
    auth_type:{type:String,default:'person'},
    identity_number:{type:String},
    phone:{type:String},
    address:{type:String},
    corporation_name:{type:String},
    business_license_id:{type:String},
    business_license_location:{type:String},
    business_license_expiration_date:{type:Date},
    corporation_phone:{type:String},
    user:{type:ObjectId},
    workflow:[WorkFlow]
});

mongoose.model('Store_Auth',StoreAuthSchema);