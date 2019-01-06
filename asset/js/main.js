$(document).ready(function () {

    var trect = document.getElementById("trect");
    var tlng = trect.getTotalLength();
    trect.style.strokeDasharray = tlng;
    trect.style.strokeDashoffset = 0;
    
    // main scroll
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

    //svg shrink scroll
    
    //timeline scroll    
    var timeline_base_top = $("#timeline_showing").offset().top-$(window).innerHeight();
    var timeline_base = $("#timeline_showing").height();
    var timeline_base_bottom = $("#timeline_showing").height() + timeline_base_top;
    
    $(window).scroll(timelineHandler);
    
    function timelineHandler(e){
        if($(this).scrollTop()>timeline_base_top/2 && $(this).scrollTop()<timeline_base_bottom*2){
            timeline_top = 100-100*($(this).scrollTop()- timeline_base_top)/timeline_base;
            if(timeline_top<=0){
                timeline_top=0;
            }else if(timeline_top>=100){
                timeline_top=100;
            }
            console.log(timeline_top);
            $(".timeline").css("top", timeline_top+"vh");
        }
    }

    
    
    
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