var controllerA1 = new ScrollMagic.Controller();

obj = new SplitText($('.banner1 P'),{type: "chars"});

var trlscrollA1 = new TimelineMax();

trlscrollA1.from('.banner1 h4' , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
});

trlscrollA1.from('.banner1 .buttonlayout' , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
},0.5);

trlscrollA1.staggerFrom(obj.chars, .8, {
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
}).setTween(trlscrollA1).addTo(controllerA1)
//.addIndicators()
;

// --------------------------------

var controllerA2 = new ScrollMagic.Controller();

obj = new SplitText($('.banner2 P'),{type: "chars"});

var trlscrollA2 = new TimelineMax();

trlscrollA2.from('.banner2 h4' , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
});

trlscrollA2.from('.banner2 .buttonlayout' , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
},0.5);

trlscrollA2.staggerFrom(obj.chars, .8, {
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
}).setTween(trlscrollA2).addTo(controllerA2)
//.addIndicators()
;

// --------------------------------

var controllerA3 = new ScrollMagic.Controller();

obj = new SplitText($('.banner3 P'),{type: "chars"});

var trlscrollA3 = new TimelineMax();

trlscrollA3.from('.banner3 h4' , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
});

trlscrollA3.from('.banner3 .buttonlayout' , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
},0.5);

trlscrollA3.staggerFrom(obj.chars, .8, {
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
}).setTween(trlscrollA3).addTo(controllerA3)
//.addIndicators()
;

// --------------------------------

var controllerA4 = new ScrollMagic.Controller();

obj = new SplitText($('.banner4 P'),{type: "chars"});

var trlscrollA4 = new TimelineMax();

trlscrollA4.from('.banner4 h4' , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
});

trlscrollA4.from('.banner4 .buttonlayout' , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
},0.5);

trlscrollA4.staggerFrom(obj.chars, .8, {
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
}).setTween(trlscrollA4).addTo(controllerA4)
//.addIndicators()
;

// --------------------------------