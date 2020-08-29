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

if ($(window).width() < 1201){
    var controllercolde = new ScrollMagic.Controller();
    
    obj = new SplitText($('.text3'),{type: "chars"});
    
    var tlscrollcolde = new TimelineMax();
    tlscrollcolde.from('.text1' , 1 ,{
        x:-300,
        alpha:0,
        ease: 
        Elastic.
        easeOut.config(
            1, 
            0.5)
        });
    // tlscrollcolde.from('.text2',1,{
    //     x:-300,
    //     alpha:0,
    // ease: 
    // Elastic.
    // easeOut.config(
    //     1, 
    //     0.5)
    // });
    tlscrollcolde.staggerFrom(obj.chars, .8, {
        opacity:0, 
        scale:0 ,
        x:80, 
        rotationX:180 ,
        transformOrigin:"0% 50% -50%" ,
        ease:Back.easeOut},
            0.01, 2.1);

    var scense01 = new ScrollMagic.Scene({
        triggerElement: '#trigger01',
        triggerHook: 0.4,
        reverse : true, // 動畫返回 true/不返回false
        offset : 100,  // 改變start觸發點
        duration : 0 //距離
    }).setTween(tlscrollcolde).addIndicators().addTo(controllercolde);

    // -------------------------------------------------

    var controllerniaws = new ScrollMagic.Controller();

    obj = new SplitText($('.text6'),{type: "chars"});
    
    var tlscrollniaws = new TimelineMax();
    tlscrollniaws.from('.text4' , 1 ,{
        x:-300,
        alpha:0,
        ease: 
        Elastic.
        easeOut.config(
            1, 
            0.5)
        });
    // tlscrollniaws.from('.text5',1,{
    //     x:-300,
    //     alpha:0,
    // ease: 
    // Elastic.
    // easeOut.config(
    //     1, 
    //     0.5)
    // });
    tlscrollniaws.staggerFrom(obj.chars, 0.8, {
        opacity:0, 
        scale:0 ,
        x:80, 
        rotationX:180 ,
        transformOrigin:"0% 50% -50%" ,
        ease:Back.easeOut},
            0.01, 2.1);

    var scense02 = new ScrollMagic.Scene({
        triggerElement: '#trigger02',
        triggerHook: 0.4,
        reverse : true, // 動畫返回 true/不返回false
        offset : 100,  // 改變start觸發點
        duration : 0 //距離
    }).setTween(tlscrollniaws).addIndicators().addTo(controllerniaws);

        // -------------------------------------------------

        var controllerLee = new ScrollMagic.Controller();

        obj = new SplitText($('.text9'),{type: "chars"});
        
        var tlscrollLee = new TimelineMax();
        tlscrollLee.from('.text7' , 1 ,{
            x:-300,
            alpha:0,
            ease: 
            Elastic.
            easeOut.config(
                1, 
                0.5)
            });
        // tlscrollLee.from('.text8',1,{
        //     x:-300,
        //     alpha:0,
        // ease: 
        // Elastic.
        // easeOut.config(
        //     1, 
        //     0.5)
        // });
        tlscrollLee.staggerFrom(obj.chars, 0.8, {
            opacity:0, 
            scale:0 ,
            x:80, 
            rotationX:180 ,
            transformOrigin:"0% 50% -50%" ,
            ease:Back.easeOut},
                0.01, 2.1);

        var scense03 = new ScrollMagic.Scene({
            triggerElement: '#trigger03',
            triggerHook: 0.4,
            reverse : true, // 動畫返回 true/不返回false
            offset : 100,  // 改變start觸發點
            duration : 0 //距離
        }).setTween(tlscrollLee).addIndicators().addTo(controllerLee);

        // -------------------------------------------------

        var controllerband1 = new ScrollMagic.Controller();

        obj = new SplitText($('.textC'),{type: "chars"});
        
        var tlscrollband1 = new TimelineMax();
        tlscrollLee.from('.textA' , 1 ,{
            x:-300,
            alpha:0,
            ease: 
            Elastic.
            easeOut.config(
                1, 
                0.5)
            });
        // tlscrollband1.from('.textB',1,{
        //     x:-300,
        //     alpha:0,
        // ease: 
        // Elastic.
        // easeOut.config(
        //     1, 
        //     0.5)
        // });
        tlscrollband1.staggerFrom(obj.chars, 0.8, {
            opacity:0, 
            scale:0 ,
            x:80, 
            rotationX:180 ,
            transformOrigin:"0% 50% -50%" ,
            ease:Back.easeOut},
                0.01, 2.1);

        var scense04 = new ScrollMagic.Scene({
            triggerElement: '#trigger04',
            triggerHook: 0.4,
            reverse : true, // 動畫返回 true/不返回false
            offset : 100,  // 改變start觸發點
            duration : 0 //距離
        }).setTween(tlscrollband1).addIndicators().addTo(controllerband1);
        
            // -------------------------------------------------

            var controllerband2 = new ScrollMagic.Controller();

            obj = new SplitText($('.textF'),{type: "chars"});
            
            var tlscrollband2 = new TimelineMax();
            tlscrollLee.from('.textD' , 1 ,{
                x:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                });
            // tlscrollband1.from('.textE',1,{
            //     x:-300,
            //     alpha:0,
            // ease: 
            // Elastic.
            // easeOut.config(
            //     1, 
            //     0.5)
            // });
            tlscrollband2.staggerFrom(obj.chars, 0.8, {
                opacity:0, 
                scale:0 ,
                x:80, 
                rotationX:180 ,
                transformOrigin:"0% 50% -50%" ,
                ease:Back.easeOut},
                    0.01, 2.1);
    
            var scense05 = new ScrollMagic.Scene({
                triggerElement: '#trigger05',
                triggerHook: 0.4,
                reverse : true, // 動畫返回 true/不返回false
                offset : 100,  // 改變start觸發點
                duration : 0 //距離
            }).setTween(tlscrollband2).addIndicators().addTo(controllerband2);
}