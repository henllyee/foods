/**
 * Created by Henry.Cui on 14-3-24.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StoreSchema = new Schema({
    store_id:{type:String,unique:true,index:true},
    store_name:{type:String,unique:true},
    store_owner:{type:String,unique:true},
    address:{type:String,unique:true},
    mobile:{type:String,unique:true},
    phone:{type:String},
    qq_number:{type:String},
    description:{type:String},
    open_time:{type:Date},
    close_time:{type:Date},
    send_price:{type:Number},
    notice:{type:String},
    latitude:{type:Number},
    longitude:{type:Number},
    region:{},
    user:{},
    taste:[]
});
mongoose.model('Store',StoreSchema);
