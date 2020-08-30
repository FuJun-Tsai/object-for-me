$(document).ready(function(){

    $('.hamburger').click(function(){

        $('.maintitlephone').slideToggle().css('backgroundColor','#383A3F');
        $(this).toggleClass("is-active");


    });

    windowchange();

    function windowchange() {      

        let windowwidth = $('html').width();

        if( windowwidth <= 991 ){

            $('.maintitle').css('display','none');

        }else if( windowwidth > 992){

            $('.maintitlephone').css('display','none');

        }

    }

    $(window).resize(function(){

        windowchange();
        
    });

});




