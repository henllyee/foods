/**
 * Created by Administrator on 13-12-2.
 */
var index = require('./controllers/index.js');
var account = require('./controllers/account.js');
var place = require('./controllers/place.js');
var store = require('./controllers/store.js')

module.exports=function(app){
    app.get('/',index.showIndex);
    app.get('/login',account.showLogin);
    app.post('/login',account.login);
    //注册
    app.get('/account/isregister',account.isRegister);
    app.get('/register',account.showRegister);
    app.post('/register',account.register);

    //餐厅查找
    app.get('/place',place.showPlace);

    //餐厅申请
    app.get('/apply',store.showApply);
    app.post('/apply',store.apply);
};

