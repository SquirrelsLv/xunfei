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
    var Hc = document.body.clientHeight;
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
        $('section').eq(0).css('margin-top',-index*Hc);
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
            $('section').eq(0).css('margin-top',-index*Hc);
        },200);
    });

    //下载按钮鼠标移入显示对应的二维码
    $('#nav .download a').hover(function () {
        $('#nav .download img').eq($(this).index()).toggle();
    });

    //轮播图
    var imgArr = [];
    $('.p4 .main img').each(function (index,obj) {
        imgArr.push(obj);
    });

    //设置数组中的图片的css样式
    function imgCss() {
        $(imgArr[0]).css({
            width: 250,
            height: 191,
            left: -200,
            top: 53,
            'z-index': 2,
        });
        $(imgArr[1]).css({
            width: 281,
            height: 215,
            left: -120,
            top: 29,
            'z-index': 3,
        });
        $(imgArr[2]).css({
            width: 320,
            height: 244,
            left: -40,
            top: 0,
            'z-index': 4,
        });
        $(imgArr[3]).css({
            width: 281,
            height: 215,
            left: 80,
            top: 29,
            'z-index': 3,
        });
        $(imgArr[4]).css({
            width: 250,
            height: 191,
            left: 180,
            top: 53,
            'z-index': 2,
        });
        $(imgArr[5]).css({
            width: 0,
            height: 0,
            left: -180,
            top: 244,
            'z-index': 0,
        });
        $(imgArr[6]).css({
            width: 0,
            height: 0,
            left: 160,
            top: 244,
            'z-index': 0,
        });
    }

    imgCss();
    setInterval(function () {
        imgArr.unshift(imgArr.pop());
        imgCss();
    },2000)

    
})
