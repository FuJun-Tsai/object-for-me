$(document).ready(function(){

    // 資訊總整方塊
    $('.btn_drawer').click(function(){

        $('.result').toggleClass('-open');
  
    });
    // /資訊總整方塊

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
        <td class="price">${ddd}</td>
        </tr>`);
        $('.bookedname span').remove();

        // let eee = $('td').parseInt();
        // alert(eee);

        fff = $('table tr').length*100/3;

        for ( let i=0 ; i<fff ; i+=1){
            let ggg;
            let hhh = $(`.qua:nth${i}`).text();
            let iii = $(`.price:nth${i}`).text();
            ggg = hhh * iii;
            jjj = ggg + jjj;
            alert(hhh);

            $('.total span').text(jjj);
        }

        $('.total span').text(fff);

    });

    $('.minus').on('click',function(){ // +

        let aaa = $(this).closest('.drink').index(); //0~2
        let bbb = $(this).closest('.item').index(); //2~11

    });


});