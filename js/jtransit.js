$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(document).scrollTop();
        var masthead = $('#masthead').height();
        var window = $('#parallax-window').height();
        if(scroll_pos > (masthead + window)) {
            $("#features").css('background-color', '#17263c');
            $("#features").css('color', 'white');
            $("#features").css('transition', 'background-color 0.75s');
            $('#feature-title').text('Introducing Night Mode');
            $('#pic-2').addClass('hidden');
            $('#pic-1').removeClass('hidden');
        } else {
            $("#features").css('background-color', 'white');
            $("#features").css('color', 'black');
            $("#features").css('transition', 'background-color 0.3s');
            $('#feature-title').text('New Features are Available');
            $('#pic-1').addClass('hidden');
            $('#pic-2').removeClass('hidden');
        }
    });
});
