$(document).ready(function(){

  // 訂位桌RWD
  winchange()
  
    $(window).resize(function(){
      winchange()
    });
  
    function winchange(){

      let screen = $('html').width();
    // screen = 螢幕寬
      if( screen < 700){
        
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
    $('input').blur(function(){
      let from = $(this).attr('id');
      let text = $(this).val();

      $(`.${from}`).text(text);

    });
    
    $('.bookwindow button').on('click',function(){            

      if($(this).attr('id').length == 1 ){ 
      let NOid = $(this).attr('id');
        $(`.${NOid} button`).toggleClass('selected');

      }else{
        $(this).toggleClass('selected');

      }
      
      let from = $(this).attr('id');
      let picking = $('.x.selected').length;

      $('.mans').text(picking);

      if (picking>0){

        let desk = new Array;
        for ( i=0 ; i<picking ; i+=1){
          let from = $(`.x.selected:nth(${i})`).attr('id');
          desk[i] = from;

          $('.tables').text(desk);

          //暫時不破版
          $('.tables').closest('p').css({
            width: '300px',
            overflowX: 'scroll',

          });
          // /暫時不破版


        }

        }else{
          desk = [];
          $('.tables').text(desk);
      }  

    });

      // /資訊總整

  });