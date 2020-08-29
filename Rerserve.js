$(document).ready(function(){

    // 訂位桌RWD
    winchange();

    $(window).resize(function(){
      winchange();
    });

    function winchange(){

      let screen = $('html').width();
      // screen = 螢幕寬
      if( screen < 769){

        let bookingheight = screen * 12 / 7 ;

        $('.result').addClass('-open');

        $('.bookwindow').css('height',bookingheight);

      }

    }
    // 寬小於700後 直立呈現

    // /訂位桌RWD

    // 資訊總整方塊
    $('.btn_drawer').click(function(){

      $('.result').toggleClass('-open');

    });
    // /資訊總整方塊

    // 資訊總整
    $('input').change(function(){
      let from = $(this).attr('id');
      let text = $(this).val();

      $(`.${from}`).text(text);

    });

    $('#time').change(function(){
      let date=$("#time :selected").text();
      
      $('.time').text(date);

    });

    $('.bookwindow button').on('click',function(){            

      if($(this).attr('id').length == 1 ){ 
        let NOid = $(this).attr('id');
        $(`.${NOid} button`).toggleClass('selected');

      }else{
        $(this).toggleClass('selected');

    }

    // let from = $(this).attr('id');
    let picking = $('.x.selected').length;

    $('.mans').text(picking);

    if (picking>0){

      let desk = new Array;

      for ( i=0 ; i<picking ; i+=1){
        let from = $(`.x.selected:nth(${i})`).attr('id');
        desk[i] = from;

        $('.tables').text(desk);
        let long = desk.join('');
        
      //暫時不破版
        $('.tables').closest('p').css({
          width: '300px',
          overflowX: 'auto',

        });
    // /暫時不破版

      }

    }else{

      desk = [];
      $('.tables').text(desk);
      }  

    });

    // /資訊總整

    // 資訊傳送

      $('.bookingbutton').click(function(){
        let R1 = $('.date').text();
        let R2 = $('.time').text();
        let R3 = $('.tables').text();
        let R4 = $('.mans').text();
        let R5 = $('.name').text();
        let R6 = $('.phone').text();

        $(this).closest('a').attr('href',`./Bookmeal.html?${R1}&${R2}&${R3}&${R4}&${R5}&${R6}`);

      });

    // /資訊傳送

});

