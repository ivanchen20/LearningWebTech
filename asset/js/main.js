$(document).ready(function () {

    var trect = document.getElementById("trect");
    var tlng = trect.getTotalLength();
    trect.style.strokeDasharray = tlng;
    trect.style.strokeDashoffset = 0;


    $(window).scroll(function () {
                
        
        
        if ($(this).scrollTop() > 500) {
            $('#indicator_scroll').fadeOut("slow");
            $("#trect").css("animation-play-state", "running");
//            if ($(this).scrollTop() > 7000) {
//                $("#mySVG").css("display","none");
//            }
//            else{
//                $("#mySVG").css("display","");
//            }
        } else {
            if ($(this).scrollTop() > 50) {
                $("#trect").css("animation-play-state", "running");
            }
            $('#indicator_scroll').fadeIn('slow');
        }

        // text slide animation
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + window.innerHeight*0.8) {
                $(this).addClass("slide");
            }
        });
    });




    // click and hover event: Nav

    var isNavOpen = false;

    $(".vinyl").click(function () {
        if (isNavOpen) {
            $(".navlist_fake").css("display", "none");
        } else {
            $(".navlist_fake").css("display", "block");
        }
        isNavOpen = !isNavOpen;
        console.log(isNavOpen);
    });

    $(".vinyl").hover(function () {
        $(".navlist").toggle(function () {});
    });
});

//$(document).ready(function(){});