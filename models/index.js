/**
 * Created by Henry.Cui on 13-12-21.
 */
var mongoose = require('mongoose');
var config = require('../config');


mongoose.connect(config.connString,function(err){
    if(err){
        console.error('can not connect to %s server',config.connString,err.message);
        process.exit(1);
    }
});

require('./base/user');
require('./base/store');
require('./base/region');
require('./base/store_auth');

exports.User = mongoose.model('User');
exports.Store = mongoose.model('Store');
exports.Region = mongoose.model('Region');
exports.Store_Auth = mongoose.model('Store_Auth');
