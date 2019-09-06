$(document).ready(function(){
    var first_load = true;
    var scroll_pos = 0;
    var theme = "light";
    $(document).scroll(function() { 
        if(first_load) {
            scroll_pos = $(document).scrollTop();
            var masthead = $('#masthead').height();
            var window = $('#parallax-window').height();
            if((scroll_pos > (masthead + window))) {
                first_load = false;
                night_mode();
                $('#toggle-btn').removeClass('hidden');
            }
        }
        
    });

    $("#item-1").hover(function() {
        $( '#pic-1' ).attr("src","img/light-mode.jpg");
        }, function() {
    });

    $("#item-2").hover(function() {
        $( '#pic-1' ).attr("src","img/route-suggestion.jpg");
        }, function() {
    });
    
    $("#item-3").hover(function() {
        $( '#pic-1' ).attr("src","img/fare-calculation.jpg");
        }, function() {
    });

    $("#item-4").hover(function() {
        $( '#pic-1' ).attr("src","img/offline-routes.jpg");
        }, function() {
    });

    $("#toggle-btn").click(function(){
        if(theme == "light"){
            $('#toggle-btn i').attr('class', 'fa fa-sun-o');
            night_mode();
        } 
        else if(theme === "night") {
            $('#toggle-btn i').attr('class', 'fa fa-moon-o');
            light_mode();
        }
    });

    function night_mode() {
        theme = "night";
        $("#features").css('background-color', '#17263c');
        $("#features").css('color', 'white');
        $("#features").css('transition', 'background-color 0.5s');
        $('#feature-title').text('Introducing Night Mode');
        $( '#pic-1' ).attr("src","img/night-mode.jpg");
    }

    function light_mode() {
        theme = "light";
        $("#features").css('background-color', 'white');
        $("#features").css('color', 'black');
        $("#features").css('transition', 'background-color 0.3s');
        $('#feature-title').text('New Features are Available');
        $( '#pic-1' ).attr("src","img/light-mode.jpg");
    }
});
