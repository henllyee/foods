/**
 * Created by Henry.Cui on 14-3-24.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RegionSchema = new Schema({
    region_code:{type:String,unique:true,index:true},
    region_name:{type:String,unique:true},
    sort_index:{type:Number}
});

mongoose.model('Region',RegionSchema);
