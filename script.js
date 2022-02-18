

// ------------JavaScript-------------


// // ----------商品画像のスライド----------------
// const swiper = new Swiper(".swiper", { 
//     pagination: {
//       el: ".swiper-pagination"
//     },
//     navigation: {   
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     }
//   });
// // -----------------------------------------



  


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
        $("header").removeClass("open");
    });
// --------------------------------------------
    


// --------商品画像のモーダル-----------

    // $('.image').modaal({
    //     type: 'image'
    // });

// -----------------------------------


    // let item = $(".item");
    // let wh = $(window).height();
    // let now = $(window).scrollTop() + wh;
    // let position =$(".inner-title").offset().top;

    let item = $(".item");
    // let now = $(window).scrollTop();

  $(window).on("scroll",function() {
    let now = $(window).scrollTop();
    if (now <= 300 || now > 2500) {
        item.removeClass("on")
        console.log(now);
      } 
    else if (now > 300) {
      item.addClass("on")
      console.log(now);
    } 
  });
  

//     $(window).scroll(function() {
//     if (now > position) {
//       $(".item").addClass("hide");

//     } else if (now < position) {
//     //   $(".item").removeClass("hide");
//     $(".item").removeClass("hide");
//     }
//   });










})