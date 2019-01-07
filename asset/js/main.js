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

    /***title scroll***/
    var subt1_top = $("#history").offset().top-$(window).innerHeight();
    var subt1_bottom = $("#history").height() + subt1_top;
    
    var subt2_top = $("#singer").offset().top-$(window).innerHeight();
    var subt2_bottom = $("#singer").height() + subt2_top;
    
    $(window).scroll(subtitleHandler);
    
    function subtitleHandler(e){
        if($(this).scrollTop()>subt1_top/2 && $(this).scrollTop()<subt1_bottom+$(window).innerHeight()*2){
            if($(this).scrollTop()>subt1_top && $(this).scrollTop()<subt1_bottom+$(window).innerHeight()){
                if(!$("#subtitle-1").hasClass("appear")){
                    $("#subtitle-1").addClass("appear");
                }
            }
            else{
                if(!$("#subtitle-1").hasClass("disappear")){                    
                    $("#subtitle-1").addClass("disappear").delay(1000).queue(function(){
                        $(this).removeClass("appear").removeClass("disappear").dequeue();
                    });
                }
            }
        }
        if($(this).scrollTop()>subt2_top-$(window).innerHeight() && $(this).scrollTop()<subt2_bottom+$(window).innerHeight()){
            if($(this).scrollTop()>subt2_top && $(this).scrollTop()<subt2_bottom){
                if(!$("#subtitle-2").hasClass("appear")){
                    $("#subtitle-2").addClass("appear");
                }
            }
            else{
                if(!$("#subtitle-2").hasClass("disappear")){                    
                    $("#subtitle-2").addClass("disappear").delay(1000).queue(function(){
                        $(this).removeClass("appear").removeClass("disappear").dequeue();
                    });
                }
            }
        }
        
    }
    
    
    /***timeline scroll***/    
    var timeline_base_top = $("#timeline_showing").offset().top-$(window).innerHeight();
    var timeline_base = $("#timeline_showing").height();
    var timeline_base_bottom = $("#timeline_showing").height() + timeline_base_top;
    
    var compare_top = $("#compare").offset().top; // - 0.1 * $(window).innerHeight()
    var compare_bottom = $("#compare").height()+compare_top;
    
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
            $("#timeline").css("top", timeline_top+"vh");
        }
        if($(this).scrollTop()>compare_top-$(window).innerHeight() && $(this).scrollTop()<compare_bottom+$(window).innerHeight()){
            console.log(compare_top);
           if($(this).scrollTop()<compare_top + 0.2 * $(window).innerHeight() && $(this).scrollTop()>compare_top){
               $("#timeline").addClass("timeline_skew");
           }
            else{
                $("#timeline").removeClass("timeline_skew");
            }
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