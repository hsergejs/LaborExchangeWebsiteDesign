$(document).ready(function(){
    /* counter */
    $('.total-orders-container').waypoint(function(){
        counter();
    },{
        offset: '100%'
    });
    
    $('.profile-stats').waypoint(function(){
        counter();
    },{
        offset: '100%'
    });
});

function counter(){
    $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'easeInOutQuint',
        step: function (now) {
                $(this).text(Math.ceil(now).toLocaleString());
            },
            done: function(){
                waypoint.disable();
            }
        });
    });
}