$(function () {
    $('.header .gnb>ul>li').on('click', function (e) {
        if($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).find('.submenu').stop().slideToggle();
        }
    });

    $('.mopen').on('click', function() {
        $('.header .gnb').toggleClass('on');
    });

    // 장치
    $(window).on('resize', function(){
        $('.header .gnb').removeClass('on');
        $('.submenu').removeAttr('style');
    });
});