$(document).ready(function(){
    
    var trect = document.getElementById("trect");
    var tlng = trect.getTotalLength();
    trect.style.strokeDasharray = tlng;
    trect.style.strokeDashoffset = 0;
    
    
    $(window).scroll(function(){              
//        console.log("indicator activated");
        if ($(this).scrollTop() > 500) {
            $('#indicator_scroll').fadeOut("slow");
        }else{
            if($(this).scrollTop()>50){
                $("#trect").css("animation-play-state", "running");
            }
            $('#indicator_scroll').fadeIn('slow');
        }
    }); 
    
    
    
    
    // click and hover event: Nav
    
//    var isNavOpen = false;
//    
//    $(".vinyl").click(function(){
//        if(isNavOpen){
//            $(".navlist").css("display", "none");
//        }else{
//            $(".navlist").css("display", "block");   
//        }
//        isNavOpen = !isNavOpen;
//        console.log(isNavOpen);
//    });
    $(".vinyl").hover(function(){
        $(".navlist").toggle(function(){
        });
    });
});

