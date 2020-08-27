$(document).ready(function(){

    // 暫時的
    Calculation() //加總

    let screen = $('html').width();
    if( screen < 768){

        $('.result').addClass('-open');

    }
    // 資訊總整方塊
    $('.btn_drawer').click(function(){

        $('.result').toggleClass('-open');
  
    });
    // /資訊總整方塊


    // 新增商品
    $('.plus').on('click',function(){ // -

        let aaa = $(this).closest('.drink').index(); //0~2
        let bbb = $(this).closest('.item').index(); //2~11

        let ccc = $(this).closest('.item').find('p').html(); //
        let ddd = $(this).closest('.item').find('span').html();

        $('table').append(`<tr>
        <td class="bookedname">${ccc}</td>
        <td>*<span class="qua">1</span>
            <button class="minus_table"></button>
            <button class="plus_table"></button>
        </td>
        <td><span class="price">${ddd}</span></td>
        </tr>`);


        if( $('.tablectrl').height()>300 ){
            
            $('.tablectrl').css({
                height: '300px',
                overflowY : 'scroll',

            });

        }

        if( $('.lightbox .tablectrl').height()>100 ){
            
            $('.lightbox .tablectrl').css({
                height: '150px',
                overflowY : 'scroll',

            });

        }

        $('.bookedname span').remove();

        // let eee = $('td').parseInt();
        // alert(eee);

        // fff = $('table tr').length*100/3;

        // for ( let i=0 ; i<fff ; i+=1){
        //     let ggg;
        //     let hhh = $(`.qua:nth${i}`).text();
        //     let iii = $(`.price:nth${i}`).text();
        //     ggg = hhh * iii;
        //     jjj = ggg + jjj;
        //     alert(hhh);

        //     $('.total span').text(jjj);
        // }

        // $('.total span').text(fff);

        Calculation()

        minus()

    });
    // /新增商品

    // 購物車清單

    minus()

    function minus(){

        $('.minus_table').click(function(){

            $(this).closest('tr').remove() ;

        });

    }

    $('.plus_table').click(function(){

        let qua = $(this).closest('.qua').text();
        alert(qua);

    });

    function Calculation(){
        let xxx = $('table tr').length;
        for( i=0 ; i<xxx ; i+=1){
            let qua ;
            let total = 0; 
            let price;

            qua = parseInt($(`tr:nth-child(${i+1})`).find('.qua').text());
            price =  parseInt($(`tr:nth-child(${i+1})`).find('.price').text());
            total = total + qua * price; 

            $('.total span').text(total);

        }

    }

    // /購物車清單

    // 資訊傳入

    sendin()

    function sendin() {
     
        //URL
        var url = location.href;
        
        //取得問號之後的值
        var temp = url.split("?");
    
        //將值再度分開
        var vars = temp[1].split("&");
        // alert(vars);
        //一一顯示出來
        for (var i = 0; i < vars.length; i++) {
            $(`.result p:nth-child(${i+2}) span`).text(vars[i]);
            $(`.lightbox p:nth-child(${i+6}) span`).text(vars[i]);

            // alert(i+1);
            //  alert(vars[i]);
        };
    
    }

    // /資訊傳入

    // 結算lightbox

    $('.lightbox').hide();
    
    $('.bookingbutton').click(function(){

        $('.lightbox').show();

        $('.linghtback').css('top','0');

    });

    $('.cancel').click(function(){

        $('.lightbox').hide();

        $('.linghtback').css('top','1000px');

    });

    // /結算lightbox
    
    // 資訊傳送

        // $('.bookingbutton').click(function(){

        //     let R1 = $('.date').text();
        //     let R2 = $('.time').text();
        //     let R3 = $('.tables').text();
        //     let R4 = $('.mans').text();
        //     let R5 = $('.name').text();
        //     let R6 = $('.phone').text();
    
        //     $(this).closest('a').attr('href',`./Bookresult.html?${R1}&${R2}&${R3}&${R4}&${R5}&${R6}`);
    
        // });
    
    // /資訊傳送

});