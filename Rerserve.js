// DOM 載入完成之後
$(function(){

    // 點擊
    $("button.btn_drawer").on("click", function(){
      
      // -open 的樣式切換
      $(this).closest("div.result").toggleClass("-open");
      
    });
  
  });