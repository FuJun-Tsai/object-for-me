$(document).ready(function(){

    
    // let imgwidth = $('html').width() * 300 / 1903 ;
    // if( $('html').width() < 1200){
    // $('.productlayout img').css('width' , imgwidth);
    
    // }

    $('.page').click(function(){
        $('.page').removeClass('here');
        $('.page').addClass('hide');
        $(this).removeClass('hide');
        $(this).addClass('here');

    });



});