/**
 * Created by Henry.Cui on 2014/4/11.
 */

$(function(){
    $('#auth-form').validate({
        rules: validateExpress,
        messages: messageExpress,
        errorPlacement: function (error, element)
        {
            error.insertBefore(element.parent());
        }
    });

});

var validateExpress={
    person_name:{
        required:true,
        rangelength:[2,4]
    },
    phone:{
        required:true,
        mobile:true
    },
    address:{
        required:true,
        rangelength:[0,255]
    },
    identity_number:{
        required:true,
        indentity_number:true
    }
};

var messageExpress = {

};