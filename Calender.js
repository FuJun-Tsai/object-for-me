$(document).ready(function(){

    banresize()

    $(window).resize(function(){
        banresize()
    });

    function banresize(){
        let winwid = $(window).width();
        let winhei = winwid * 1000 / 1920;
        $('.banscreen').height(winhei);
        $('.banner1').height(winhei);
    }

    let ban = $('.banctrl>div').length;
    let winwid = $(window).width();
    // ('.banctrl>div').length;

    for( i=0 ; i<ban ;i+=1){
        $('.ctrlban').append('<li></li>');
        
    }

    $('.banctrl').width(winwid*ban);

    $('.ctrlban li:nth-child(1)').addClass('lifocus');

    $('.ctrlban li').click(function(){
        clearInterval(bannerMoveAuto); 
        $(this).addClass('lifocus');
        $('.ctrlban li').not(this).removeClass('lifocus');
        let index = $(this).index()*-100;
        
        $('.banctrl').animate({
            left: `${index}vw` ,

        });
    

    });
    
    $('.ctrlban li').addClass('liblur');

    let Mi = 0;
    function bannerMoveAuto(){ 
        let ani = Mi*-100;
        console.log(Mi);
        if(Mi>ban-2){
            Mi=0;
        }else{
            Mi+=1;
        }

        $('.banctrl').animate({
            left: `${ani}vw` ,
        });

        $('.ctrlban li').removeClass('lifocus');
        $(`.ctrlban li:nth(${Mi-1})`).addClass('lifocus');

    }
    //重複執行某個方法 
    var bannerMoveAuto = setInterval(bannerMoveAuto,1000); 


    if ( $('html').width() < 1200){
        
        let bannerheight = $('html').width() * 1495 / 2048; 
        $('.banner').css('height',bannerheight);

        let coldeheight = $('html').width() * 1152 / 1920; 
        $('.colde').css('height',coldeheight);

        let planteggheight = $('html').width() * 1000 / 1920 ;
        $('.EggPlantEgg').css('height',planteggheight);

            // let calindex = $('.day:nth(1) .showname').length; 
            // alert(calindex);
            let week = 0;

            $(`.day`).not(`.day:nth(${week})`).addClass('hide');

            $('.turnL').on('click',function(){
                calchange('prev');
            });            


            $('.turnR').on('click',function(){
                calchange('next');
            });
            
            // $(`.day td:nth(0)`).append('<span>(Mon)</span>');
            // $('td:nth(0) span').css({color:'gray'});
            
            function calchange(e){
                
                if(e == 'next'){
                    week = week + 1;
                    
                }else if(e == 'prev'){
                    week = week - 1;
                    
                }
                
                if(week == 5){
                    week = 0;
                }else if(week == -1){
                    week = 4;
                }
                
                
                $(`.day:nth(${week})`).removeClass('hide');
                $(`.day`).not(`.day:nth(${week})`).addClass('hide');
                
                
            }

    }



});