$(function () {
    $('form').validate({
        rules: validateExpress,
        messages: messageExpress,
        errorPlacement: function (error, element)
        {
            error.appendTo(element.parent().prev());
        }
    });
    $('#register').click(function () { $('form').submit() });
    //validateRegister();
    isShowInfo();
});
//验证表达式
var validateExpress = {
    username: {
        required: true,
        rangelength: [6, 20],
        user: true,
        remote: {
            url: "/account/isregister",
            type: "get",
            dataType: "json",           //接受数据格式
            data: {                     //要传递的数据
                username: function () {
                    return $("#username").val();
                }
            }
        }
    },
    password: { required: true, rangelength: [6, 20] },
    makepassword: { required: true, equalTo: "#password" },

    email: {
        required: true,
        email: true,
        remote: {
            url: "account/isregister",
            type: "get",
            dataType: "json",           //接受数据格式
            data: {                     //要传递的数据
                email: function () {
                    return $("#email").val();
                }
            }
        }
    }
}

//错误表达式
var messageExpress = {
    makepassword: {
        equalTo: "两次输入的密码不同"
    },
    username: {
        remote: "此用户名已经注册"
    },
    email: {
        remote: "此邮箱已经注册"
    }
}



function isShowInfo() {
    if ($('#info').text() === '') $('#info').hide();
    else $('#info').show();
}

