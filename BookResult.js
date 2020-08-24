$(document).ready(function(){

    // 資訊傳入

    $('.resultlayout p').click(function(){
        let XX = $(this).index();
        alert(XX);
    });

    show()

    function show () {
     
        //URL
        var url = location.href;
        
        //取得問號之後的值
        var temp = url.split("?");
    
        //將值再度分開
        var vars = temp[1].split("&");
        alert(vars);
        //一一顯示出來
        for (var i = 0; i < vars.length ; i+=1) {
            $(`.resultlayout p:nth-child(${i+1}) span`).text(vars[i]);

            // alert(i+1);
            //  alert(vars[i]);
        };
    
    }

    // /資訊傳入


});