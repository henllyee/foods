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
    $('#image1').fileupload({
        dataType:'json',
        done:function(e,data){
            $.each(data.result, function (index, file) {
                if(data.result.result===true){
                    $('#btnUp').text('重新上传');
                    $('img',$('#btnUp').parent().parent()).remove();
                    $('#btnUp').parent().before('<img src="'+data.result.image+'"/>')
                }
            });
        },
        progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#btnUp').text('上传：'+progress+'%');
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