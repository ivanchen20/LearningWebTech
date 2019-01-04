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
            $('#indicator_scroll').fadeIn('slow');
        }
    }); 
});

