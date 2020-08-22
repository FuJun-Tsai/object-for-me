$(document).ready(function(){

    
    // let imgwidth = $('html').width() * 300 / 1903 ;
    // if( $('html').width() < 1200){
    // $('.productlayout img').css('width' , imgwidth);
    
    // }

    // $('.page').click(function(){
    //     $('.page').removeClass('thispage');
    //     $('.page').addClass('hide');
    //     $(this).removeClass('hide');
    //     $(this).addClass('thispage');

    // });

    
    $('.page').on('click',function(){
        $(this).removeClass('hide').addClass('thispage');        
        $('.page').not(this).removeClass('thispage').addClass('hide');
    });


});