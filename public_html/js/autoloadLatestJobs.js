$(document).ready(function () {
    //https://www.youtube.com/watch?v=Ga3pOn7wXBA
    function refresh(){
        setTimeout(function(){
            $('.latest-orders').fadeOut('slow').load('load.php').fadeIn('slow');
            refresh();
        },2000);
    }
}); 