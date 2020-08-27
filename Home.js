$(document).ready(function(){

    bannerchange()

    $(window).resize(function(){

        bannerchange()

    });

    function bannerchange(){

        if($(window).width() < 1201){

            let bannerheight = $('html').width() * 1280 / 1920; 
            $('.banner').css('height',bannerheight);

        }

    }

});

var controller = new ScrollMagic.Controller();
var tlscroll =  new TimelineMax();
tlscroll.to('.scoll', 1, {x: 50})
var scense01 = new ScrollMagic.Scene({
    triggerElement: '#trigger01',
    triggerHook: 0.5,
    reverse : true, // 動畫返回 true/不返回false
    offset : -300,  // 改變start觸發點
    duration : 500 //距離

}).setTween(tlscroll).addIndicators().addTo(controller);

