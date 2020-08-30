$(document).ready(function(){

    bannerchange()

    $(window).resize(function(){

        bannerchange()

    });

    function bannerchange(){

            let bannerheight = $('html').width() * 1280 / 1920; 
            $('.banner').css('height',bannerheight);

    }

});

obj = new SplitText($('.maintitle a'),{type: "chars"});

TweenMax.staggerFrom(obj.chars, .8, {
    opacity:0, 
    scale:0 ,
    y:80, 
    rotationX:180 ,
    transformOrigin:"0% 50% -50%" ,
    ease:Back.easeOut},
        0.01, 0.85);


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
    tlscrollcolde.from('.block1' , 1 ,{
        y:-300,
        alpha:0,
        ease: 
        Elastic.
        easeOut.config(
            1, 
            0.5)
        });
    tlscrollcolde.from('.text1' , 1 ,{
        x:-300,
        alpha:0,
        ease: 
        Elastic.
        easeOut.config(
            1, 
            0.5)
        },0.75);
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
            0.01, 0.85);

    var scense01 = new ScrollMagic.Scene({
        triggerElement: '#trigger01',
        triggerHook: 0.4,
        reverse : true, // 動畫返回 true/不返回false
        offset : 100,  // 改變start觸發點
        duration : 0 //距離
    }).setTween(tlscrollcolde).addTo(controllercolde)
    //.addIndicators()
    ;

    // -------------------------------------------------

    var controllerniaws = new ScrollMagic.Controller();

    obj = new SplitText($('.text6'),{type: "chars"});
    
    var tlscrollniaws = new TimelineMax();
    tlscrollniaws.from('.block2' , 1 ,{
        y:-300,
        alpha:0,
        ease: 
        Elastic.
        easeOut.config(
            1, 
            0.5)
        });
    tlscrollniaws.from('.text4' , 1 ,{
        x:-300,
        alpha:0,
        ease: 
        Elastic.
        easeOut.config(
            1, 
            0.5)
        },0.75);
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
            0.01, 0.85);

    var scense02 = new ScrollMagic.Scene({
        triggerElement: '#trigger02',
        triggerHook: 0.4,
        reverse : true, // 動畫返回 true/不返回false
        offset : 100,  // 改變start觸發點
        duration : 0 //距離
    }).setTween(tlscrollniaws).addTo(controllerniaws)
    //.addIndicators()
    ;

        // -------------------------------------------------

        var controllerLee = new ScrollMagic.Controller();

        obj = new SplitText($('.text9'),{type: "chars"});
        var tlscrollLee = new TimelineMax();
        tlscrollLee.from('.block3' , 1 ,{
            y:-300,
            alpha:0,
            ease: 
            Elastic.
            easeOut.config(
                1, 
                0.5)
            });
        tlscrollLee.from('.text7' , 1 ,{
            x:-300,
            alpha:0,
            ease: 
            Elastic.
            easeOut.config(
                1, 
                0.5)
            },0.75);
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
                0.01, 0.85);

        var scense03 = new ScrollMagic.Scene({
            triggerElement: '#trigger03',
            triggerHook: 0.4,
            reverse : true, // 動畫返回 true/不返回false
            offset : 100,  // 改變start觸發點
            duration : 0 //距離
        }).setTween(tlscrollLee).addTo(controllerLee)
        //.addIndicators()
        ;

        // -------------------------------------------------

        var controllerband1 = new ScrollMagic.Controller();

        obj = new SplitText($('.textC'),{type: "chars"});
        
        var tlscrollband1 = new TimelineMax();
        tlscrollband1.from('.block4' , 1 ,{
            y:-300,
            alpha:0,
            ease: 
            Elastic.
            easeOut.config(
                1, 
                0.5)
            });
        tlscrollband1.from('.textA' , 1 ,{
            x:-300,
            alpha:0,
            ease: 
            Elastic.
            easeOut.config(
                1, 
                0.5)
            },0.75);
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
                0.01, 0.85);

        var scense04 = new ScrollMagic.Scene({
            triggerElement: '#trigger04',
            triggerHook: 0.4,
            reverse : true, // 動畫返回 true/不返回false
            offset : 100,  // 改變start觸發點
            duration : 0 //距離
        }).setTween(tlscrollband1).addTo(controllerband1)
        //.addIndicators()
        ;
        
            // -------------------------------------------------

            var controllerband2 = new ScrollMagic.Controller();

            obj = new SplitText($('.textF'),{type: "chars"});
            
            var tlscrollband2 = new TimelineMax();
            tlscrollband2.from('.block5' , 1 ,{
                y:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                });
            tlscrollband2.from('.textD' , 1 ,{
                x:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                },0.75);
            // tlscrollband2.from('.textE',1,{
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
                    0.01, 0.85);
    
            var scense05 = new ScrollMagic.Scene({
                triggerElement: '#trigger05',
                triggerHook: 0.4,
                reverse : true, // 動畫返回 true/不返回false
                offset : 100,  // 改變start觸發點
                duration : 0 //距離
            }).setTween(tlscrollband2).addTo(controllerband2)
            //.addIndicators()
            ;

            // -------------------------------------------------

            var controllerdrink1 = new ScrollMagic.Controller();
            
            var tlscrolldrink1 = new TimelineMax();
            tlscrolldrink1.from('.block6' , 1 ,{
                y:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                });
            tlscrolldrink1.from('.textD1' , 1 ,{
                x:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                },0.75);
    
            var scense06 = new ScrollMagic.Scene({
                triggerElement: '#trigger06',
                triggerHook: 0.4,
                reverse : true, // 動畫返回 true/不返回false
                offset : 100,  // 改變start觸發點
                duration : 0 //距離
            }).setTween(tlscrolldrink1).addTo(controllerdrink1)
            //.addIndicators()
            ;

            // -------------------------------------------------

            var controllerdrink2 = new ScrollMagic.Controller();

            var tlscrolldrink2 = new TimelineMax();
            tlscrolldrink2.from('.block7' , 1 ,{
                y:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                });
            tlscrolldrink2.from('.textD2' , 1 ,{
                x:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                },0.75);
    
            var scense07 = new ScrollMagic.Scene({
                triggerElement: '#trigger07',
                triggerHook: 0.4,
                reverse : true, // 動畫返回 true/不返回false
                offset : 100,  // 改變start觸發點
                duration : 0 //距離
            }).setTween(tlscrolldrink2).addTo(controllerdrink2)
            //.addIndicators()
            ;

            // -------------------------------------------------

            var controllerdrink3 = new ScrollMagic.Controller();

            var tlscrolldrink3 = new TimelineMax();
            tlscrolldrink3.from('.block8' , 1 ,{
                y:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                });
            tlscrolldrink3.from('.textD3' , 1 ,{
                x:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                },0.75);
    
            var scense08 = new ScrollMagic.Scene({
                triggerElement: '#trigger08',
                triggerHook: 0.4,
                reverse : true, // 動畫返回 true/不返回false
                offset : 100,  // 改變start觸發點
                duration : 0 //距離
            }).setTween(tlscrolldrink3).addTo(controllerdrink3)
            //.addIndicators()
            ;

            // -------------------------------------------------

            var controllerfood1 = new ScrollMagic.Controller();

            var tlscrollfood1 = new TimelineMax();
            tlscrollfood1.from('.block9' , 1 ,{
                y:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                });
            tlscrollfood1.from('.textF1' , 1 ,{
                x:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                },0.75);
    
            var scense09 = new ScrollMagic.Scene({
                triggerElement: '#trigger09',
                triggerHook: 0.4,
                reverse : true, // 動畫返回 true/不返回false
                offset : 100,  // 改變start觸發點
                duration : 0 //距離
            }).setTween(tlscrollfood1).addTo(controllerfood1)
            //.addIndicators()
            ;

            // -------------------------------------------------

            var controllerfood2 = new ScrollMagic.Controller();

            var tlscrollfood2 = new TimelineMax();
            tlscrollfood2.from('.block10' , 1 ,{
                y:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                });
            tlscrollfood2.from('.textF2' , 1 ,{
                x:-300,
                alpha:0,
                ease: 
                Elastic.
                easeOut.config(
                    1, 
                    0.5)
                },0.75);
    
            var scense10 = new ScrollMagic.Scene({
                triggerElement: '#trigger10',
                triggerHook: 0.4,
                reverse : true, // 動畫返回 true/不返回false
                offset : 100,  // 改變start觸發點
                duration : 0 //距離
            }).setTween(tlscrollfood2).addTo(controllerfood2)
            //.addIndicators()
            ;
            
}