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

// if($(window).width()<576){
//     var controller = new ScrollMagic.Controller();
//     var tlscroll =  new TimelineMax();
//     tlscroll.from('.scoll1', 1, {x: -100,alpha:0 })
//     .from('.scoll2', 1, {x: -100,alpha:0 })
//     .from('.scoll3', 1, {x: -100,alpha:0 })
//     var scense01 = new ScrollMagic.Scene({
//         triggerElement: '#trigger01',
//         triggerHook: 0.5,
//         reverse : true, // 動畫返回 true/不返回false
//         offset : -300,  // 改變start觸發點
//         duration : 500 //距離

//     }).setTween(tlscroll)
//     .addTo(controller)
//     .addIndicators();
// }
