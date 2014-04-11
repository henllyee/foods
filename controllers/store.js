/**
 * Created by henry.cui on 14-3-25.
 */
var model = require('../models');
var Store_Auth = model.Store_Auth;
var StoreAuthProxy = require('../Proxy').StoreAuthProxy;
/**
 * 展示申请界面 */
exports.showApply=function(req,res){
  res.render('store/apply');
};

/**
 * 提交验证请求
 *
 * @param  {HttpRequest} req
 * @param  {HttpResponse} res
 */
exports.apply=function(req,res,next){
    var store_auth = new Store_Auth();
    store_auth.person_name=req.body.person_name;
    store_auth.identity_number = req.body.identity_number;
    store_auth.phone = req.body.phone;
    store_auth.address = req.body.address;
    store_auth.workflow = [{status:'apply',make_date:Date.now()}];
    StoreAuthProxy.newAndSave(store_auth,function(err){
        if(err) next(err);
        res.redirect('/');
    });
};
