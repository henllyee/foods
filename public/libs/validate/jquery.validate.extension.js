
//身份证号码
jQuery.validator.addMethod("indentity_number", function (value, element) {
    var tel = /^\d{18}$/;
    return tel.test(value) || this.optional(element);
}, "请正确填写您的手机号码");
//手机号码
jQuery.validator.addMethod("mobile", function (value, element) {
	var tel = /^(130|131|132|133|134|135|136|137|138|139|150|153|157|158|159|180|187|188|189)\d{8}$/;
	return tel.test(value) || this.optional(element);
}, "请正确填写您的手机号码");

//电话号码
jQuery.validator.addMethod("tel", function (value, element) {
	var tel = /^\d{3,4}-?\d{7,9}$/;    //电话号码格式010-12345678   
	return this.optional(element) || (tel.test(value));
}, "请正确填写您的电话号码");


// 联系电话(手机/电话皆可)验证   
jQuery.validator.addMethod("phone", function (value, element) {
	var length = value.length;
	var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
	var tel = /^\d{3,4}-?\d{7,9}$/;
	return this.optional(element) || (tel.test(value) || mobile.test(value));
}, "请正确填写您的联系电话");

//qq号
jQuery.validator.addMethod("qq", function (value, element) {
    var tel = /^[1-9]\d{4,9}$/;
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的QQ号码");

//price
jQuery.validator.addMethod("price", function (value, element) {
    var tel = /\d{1,10}(\.\d{1,2})?$/;
    return this.optional(element) || (tel.test(value));
}, "请正确填写价格");

//用户名
jQuery.validator.addMethod("user", function (value, element) {
    return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);
}, "只能包括中文字、英文字母、数字和下划线");
//时间
jQuery.validator.addMethod("time", function (value, element) {
    return this.optional(element) || /\d{1,2}\:\d{1,2}$/.test(value);
}, "请正确填写时间");
//商店地址
jQuery.validator.addMethod("storePath", function (value, element) {
    return this.optional(element) || /^[A-Za-z0-9]+$/.test(value);
}, "只能包括英文字母、数字");

jQuery.extend(jQuery.validator.messages, {
    required: "必填字段",
    remote: "请修正该字段",
    email: "请输入正确格式的电子邮箱",
    url: "请输入合法的网址",
    date: "请输入合法的日期",
    dateISO: "请输入合法的日期 (ISO).",
    number: "请输入合法的数字",
    digits: "只能输入整数",
    creditcard: "请输入合法的信用卡号",
    equalTo: "请再次输入相同的值",
    accept: "请输入拥有合法后缀名的字符串",
    maxlength: jQuery.validator.format("长度最多是{0}位"),
    minlength: jQuery.validator.format("长度最少是{0}位"),
    rangelength: jQuery.validator.format("长度介于{0}到{1}位之间"),
    range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
    max: jQuery.validator.format("请输入一个最大为{0} 的值"),
    min: jQuery.validator.format("请输入一个最小为{0} 的值"),
    indentity_number:"请输入正确的身份证号码"
});