$(document).ready(function(){
    
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