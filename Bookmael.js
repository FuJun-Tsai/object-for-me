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

        i+=1;
        console.log(parseInt(i));

        $('table').append(`<tr>
        <td class="bookedname">${ccc}</td>
        <td>
            <button class="minus_table"></button>
            *<span class="qua">1</span>
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

        plus()


    });
    // /新增商品

    // 購物車清單



    Calculation()

    function minus(){

        $('.minus_table').click(function(){
            let qua = parseInt($(this).closest('td').find('.qua').text());
            if(qua>1){
                 qua-=1;
                $(this).closest('td').find('.qua').text(qua);
                Calculation()

            }else{
                $(this).closest('tr').remove(); 
                Calculation()

            }
            Calculation()
        });

    }

    function plus(){

        let i = ($(this).closest('tr').index()+1);

        $(`.plus_table`).click(function(){
            let qua = parseInt($(this).parent().find(`.qua`).text());
            qua+=1;
            $(this).parent().find(`.qua`).text(qua);
            Calculation();

        });

    }

    function Calculation(){
        let total = 0; 

        let xxx = $('#end tr').length;
        for( i=0 ; i<xxx ; i+=1){
            let qua ;
            let price;

            
            qua = parseInt($(`#end tr:nth(${i}) .qua`).text());
            price = parseInt($(`#end tr:nth(${i}) .price`).text().split('$')[1]);
            total = total + qua * price; 
            $('.total span').text(total);

        }

    }

    // /購物車清單

    // 結算lightbox

    $('.lightbox').hide();
    
    $('.bookingbutton').click(function(){

        $('.lightbox').show();

        $('.linghtback').css('top','0');

        $('#end button').remove();

    });

    $('.cancel').click(function(){

        $('.lightbox').hide();

        $('.linghtback').css('top','1000px');

    });

    // /結算lightbox
    
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
        vars[4] = decodeURI(vars[4]);

        for (var i = 0; i < vars.length; i++) {
            $(`.result p:nth-child(${i+2}) span`).text(vars[i]);
            $(`.lightbox p:nth-child(${i+6}) span`).text(vars[i]);

            // alert(i+1);
            //  alert(vars[i]);
        };
    
    }

    // /資訊傳入

    
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


var item = new TimelineMax();

item.from(`.drink .item:nth-child(3)` , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0);

item.from(`.drink .item:nth-child(4)` , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0.15);

item.from(`.drink .item:nth-child(5)` , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0.3);

item.from(`.drink .item:nth-child(6)` , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0.45);

item.from(`.drink .item:nth-child(7)` , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0.6);

item.from(`.drink .item:nth-child(8)` , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0.75);

item.from(`.drink .item:nth-child(9)` , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },0.9);

item.from(`.drink .item:nth-child(10)` , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },1.05);

item.from(`.drink .item:nth-child(11)` , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },1.2);

item.from(`.drink .item:nth-child(12)` , 1 ,{
    x:-300,
    alpha:0,
    ease: 
    Elastic.
    easeOut.config(
        1, 
        0.5)
    },1.35);

    