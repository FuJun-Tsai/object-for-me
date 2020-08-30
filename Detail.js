$(document).ready(function(){

    let bannerheight = $('html').width() ; 

    

    if (bannerheight < 500){
        $('.singer img').css('height',bannerheight);
    }

});

var Con1 = new ScrollMagic.Controller();

obj = new SplitText($('.back1 .singer p'),{type: "chars"});

var Tlm1 = new TimelineMax();

Tlm1.from('.back1 .singer img' , 1 ,{
    x:800,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0);

Tlm1.from('.back1 .singer .text' , 1 ,{
    x:-800,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0);

Tlm1.staggerFrom(obj.chars, .8, {
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
    offset : 0,  // 改變start觸發點
    duration : 0 //距離
}).setTween(Tlm1).addTo(Con1)
//.addIndicators()
;

// --------------------------------------------------------------

var Con2 = new ScrollMagic.Controller();

obj = new SplitText($('.back1 .singer_reverse p'),{type: "chars"});

var Tlm2 = new TimelineMax();

Tlm2.from('.back1 .singer_reverse img' , 1 ,{
    x:800,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0);

Tlm2.from('.back1 .singer_reverse .text' , 1 ,{
    x:-800,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0);

Tlm2.staggerFrom(obj.chars, .8, {
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
    offset : 1000,  // 改變start觸發點
    duration : 0 //距離
}).setTween(Tlm2).addTo(Con2)
//.addIndicators()
;

// --------------------------------------------------------------

var Con3 = new ScrollMagic.Controller();

obj = new SplitText($('.back2 .singer p'),{type: "chars"});

var Tlm3 = new TimelineMax();

Tlm3.from('.back2 .singer img' , 1 ,{
    x:800,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0);

Tlm3.from('.back2 .singer .text' , 1 ,{
    x:-800,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0);

Tlm3.staggerFrom(obj.chars, .8, {
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
    offset : 0,  // 改變start觸發點
    duration : 0 //距離
}).setTween(Tlm3).addTo(Con3)
//.addIndicators()
;

// --------------------------------------------------------------

var Con4 = new ScrollMagic.Controller();

obj = new SplitText($('.back2 .singer_reverse p'),{type: "chars"});

var Tlm4 = new TimelineMax();

Tlm4.from('.back2 .singer_reverse img' , 1 ,{
    x:800,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0);

Tlm4.from('.back2 .singer_reverse .text' , 1 ,{
    x:-800,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0);

Tlm4.staggerFrom(obj.chars, .8, {
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
    offset : 0,  // 改變start觸發點
    duration : 0 //距離
}).setTween(Tlm4).addTo(Con4)
//.addIndicators()
;