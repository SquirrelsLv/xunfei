/**
 * Created by Administrator on 2017/1/12 0012.
 */
$(function () {
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
            if (index == 0){
                
            }
            $('.side li').eq(index).addClass('cur').siblings().removeClass('cur');
            $('section').eq(index).show().siblings('section').hide();
        },200);
    });
})
