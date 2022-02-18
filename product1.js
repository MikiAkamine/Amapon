
// ----------商品画像のスライド----------------
const swiper = new Swiper(".swiper", { 
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {   
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
// -----------------------------------------



$(function(){

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


    $('.image').modaal({
        type: 'image'
    });

















})