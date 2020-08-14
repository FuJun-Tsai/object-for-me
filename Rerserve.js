$(document).ready(function(){

  let screen = $('html').width();

  if( screen < 768){

    let bookwindowwidth = screen ;
    let bookwindowheight = screen * 12 / 7 ;

    
    
    $('.result').addClass('-open');

    $('bookwindow').addCss({
      height : bookwindowwidth ,
      width : bookwindowheight ,

      

    });

  }



  $('.btn_drawer').click(function(){

    $('.result').toggleClass('-open');

  });

});