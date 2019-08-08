$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(document).scrollTop();
        var div = $('#features')[0].scrollHeight;
        var parallax = $('#features').height() / 1.75;
        if(scroll_pos > (div + parallax)) {
            $("#features").css('background-color', 'grey');
            $('#feature-title').text('Night Mode Available');
        } else {
            $("#features").css('background-color', 'white');
            $('#feature-title').text('Features Here');
        }
    });
});
