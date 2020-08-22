$(document).ready(function(){

    bannerchange()

    $(window).resize(function(){

        bannerchange()

    });

    function bannerchange(){

        if($(window).width() < 1201){

            let bannerheight = $('html').width() * 1280 / 1920; 
            $('.banner').css('height',bannerheight);

        }

    }

});