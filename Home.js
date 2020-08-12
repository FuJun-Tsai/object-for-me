$(document).ready(function(){

    $('.hamburger').click(function(){

        $('.maintitle').toggleClass('maintitle_ctrl').css('backgroundColor','#383A3F');
        
    });

    let bannerheight = $('body').width() * 0.66; 
    $('.banner').css('height',bannerheight);

});