

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
        $("header").removeClass("open");
    });
// --------------------------------------------

$("#openModal").on("click",function(){
    $("#openModal").fadeIn();
    $(".slick-slider").slick("setPosition");
});

$("#closeModal, #modalBig").on("click",function(){
    $("#modalArea").fadeOut();
});

$(".single_sample").slick({
    dots: true,
});















})