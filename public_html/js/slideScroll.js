$(window).scroll(function() {
    /* page elements slide animation */
    $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
  
    /* hide/show navbar */
    if($(this).scrollTop() > 10){
        $('.navbar').css("background-color","#020134");
        $('.navbar li a').css("background-color","#020134");
    }
    else {
        $('.navbar').css("background-color","transparent");
        $('.navbar li a').css("background-color","transparent");
    }
    
    /* hide/show scrollSpyArrow */
    if($(this).scrollTop() > 200){
        $("#scrollSpyArrow").css("visibility","visible");
        $("#scrollSpyArrow").stop().animate({opacity: '0.7'}, 100);
    }
    else {
        $("#scrollSpyArrow").stop().animate({opacity: '0'}, 100);
        $("#scrollSpyArrow").css("visibility","hidden");
        
    }
});