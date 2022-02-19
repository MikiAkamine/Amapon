

// ------------JavaScript-------------



// --------------------------------------jQuery------------------------------------------------------
$(function(){


    // -------ヘッダーのハンバーガーメニュー--------
    $(".toggle_btn").on("click",function(){
        if($("#header").hasClass("open")){
            $("#header").removeClass("open");
        }else{
            $("#header").addClass("open");
        }
    });

    $("#mask").on("click",function(){
        $("#header").removeClass("open");
    });

    $("#navi a").on("click",function(){
        $("#header").removeClass("open");
    });
// --------------------------------------------


// -----------video終了時のフェードイン-----------
    $("#video").on("ended",function(){
      $(".main-text").fadeIn(3000);
    })
// --------------------------------------------


// ------------スクロール時のPickup-------------------
  let item = $(".item");
  $(window).on("scroll",function() {
    let now = $(window).scrollTop();
    if (now <= 300 || now > 2500) {
        item.removeClass("on")
      } 
    else if (now > 300) {
      item.addClass("on")
    } 
  });
  // ---------------------------------------------









})