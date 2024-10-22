
$(document).ready(function () {

    /*  로그인 장바구니 메뉴  */

    $(".login-modal a i:first").click(function(){
        $(".login-modal, .container").fadeOut();
    });
    

    /* 메뉴 클릭 */
    $("#head i:last").click(function () {
        $(".menu_box").fadeIn();
    });

    $(".menu_box i:last").click(function(){
        $(".menu_box").fadeOut();
    });






    /*  애플  */
    let bannerWidth = $(".section1-images a img").width()+ 100; 

    $(".section1-images").css({ left: -bannerWidth + "px" });
    $(".section1-images a img:last").prependTo(".section1-images");

    function bannerAuto() {
        // Slide the banner to the left (automatic)
        $(".section1-images").animate({ left: "-=" + bannerWidth + "px" }, 500, 'swing', function () {
            $(".section1-images a img:first").appendTo(".section1-images");
            $(this).css({ left: -bannerWidth*4 + "px" });
        });
    }

    let bannerTimer = setInterval(bannerAuto, 4000);

    $(".left-btn").click(function () {
        // Slide to the right
        $(".section1-images").animate({ left: "+=" + bannerWidth + "px" }, 500, 'swing', function () {
            $(".section1-images a img:last").prependTo(".section1-images");
            $(this).css({ left: -bannerWidth + "px" });
        });
    });

    $(".right-btn").click(function () {
        // Slide to the left
        $(".section1-images").animate({ left: "-=" + bannerWidth + "px" }, 500, 'swing', function () {
            $(".section1-images a img:first").appendTo(".section1-images");
            $(this).css({ left: -bannerWidth + "px" });
        });
    });

    $(".section1-images").hover(function () {
        clearInterval(bannerTimer);
    }, function () {
        bannerTimer = setInterval(bannerAuto, 4000);
    });
});
