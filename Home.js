$(document).ready(function(){

    $('.hamburger').click(function(){

        $('.maintitle').toggleClass('maintitle_ctrl').css('backgroundColor','#383A3F');
        
    });

    let bannerheight = $('html').width() * 1280 / 1920; 
    $('.banner').css('height',bannerheight);

});