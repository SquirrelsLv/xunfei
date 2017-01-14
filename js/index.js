/**
 * Created by Administrator on 2017/1/12 0012.
 */
$(function () {

    // nav,与 download切换显示;
    function downl(index) {
        if (index == '0'){
            $('#nav .download').addClass('curo').siblings('.nav').removeClass('curo');
        }else {
            $('.nav').addClass('curo').siblings('.download').removeClass('curo');
        }
    }
    var index = 0;
    var timer = null;
    //侧边栏鼠标移入移出效果
    $('.side li').hover(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
    },function () {
        $('.side li').eq(index).addClass('cur').siblings().removeClass('cur');
    });

    //侧边栏鼠标点击效果
    $('.side li').click(function () {
        index = $(this).index();
        downl(index);
        $('.side li').eq(index).addClass('cur').siblings().removeClass('cur');
        $('section').eq(index).show().siblings('section').hide();
    });
    //滑动滚轮
    $(window).mousewheel(function (ev,d) {
        clearTimeout(timer);
        timer=setTimeout(function () {
            index -= d;
            if(index<0 || index>6){
                index = 0;
            }
            downl(index);
            $('.side li').eq(index).addClass('cur').siblings().removeClass('cur');
            $('section').eq(index).show().siblings('section').hide();
        },200);
    });

    //下载按钮鼠标移入显示对应的二维码
    $('#nav .download a').hover(function () {
        $('#nav .download img').eq($(this).index()).toggle();
    });




    
    
})
