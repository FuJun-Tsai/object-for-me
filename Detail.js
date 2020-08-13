$(document).ready(function(){

    let bannerheight = $('html').width() ; 

    

    if (bannerheight < 500){
        $('.singer img').css('height',bannerheight);
    }

});