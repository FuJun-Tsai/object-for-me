$(document).ready(function(){
    
    if ( $('html').width() < 1200){
        
        let bannerheight = $('html').width() * 1495 / 2048; 
        $('.banner').css('height',bannerheight);

        let coldeheight = $('html').width() * 1152 / 1920; 
        $('.colde').css('height',coldeheight);

        let planteggheight = $('html').width() * 1000 / 1920 ;
        $('.EggPlantEgg').css('height',planteggheight);

        for( let i = 0 ; i < 4 ; i+=1){

            $('.day').addClass('hide');
            $('.day:nth(0)').toggleClass('hide');

        }



    }


    // $('.day').each();

    








});