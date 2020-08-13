$(document).ready(function(){

    
    let imgwidth = $('html').width() * 300 / 1903 ;

    if( $('html').width() < 1200){
    $('.productlayout img').css('width' , imgwidth);
    
    }

});