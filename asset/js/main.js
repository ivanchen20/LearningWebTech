$(document).ready(function(){

    $(window).scroll(function(){              
//        console.log("indicator activated");
        if ($(this).scrollTop() > 500) {
            $('#indicator_scroll').fadeOut("slow");
        }else{
            $('#indicator_scroll').fadeIn('slow');
        }
    }); 
});

