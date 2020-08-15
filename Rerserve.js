$(document).ready(function(){

  let screen = $('html').width();

  if( screen < 1200){
    
    let bookingheight = screen * 12 / 7 ;

    $('.result').addClass('-open');

    $('.bookwindow').css('height',bookingheight);


  }



  $('.btn_drawer').click(function(){

    $('.result').toggleClass('-open');

  });

});