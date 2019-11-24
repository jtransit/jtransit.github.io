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

    $("#item-1").hover(
        function() {
            if(theme === "light") {
                $( '#pic-1' ).attr("src","img/light-mode.jpg");
            } else {
                $( '#pic-1' ).attr("src","img/night-mode.jpg");
            }
        }, function() {
    });

    $("#item-2").hover(
        function() {
            if(theme === "light") {
                $( '#pic-1' ).attr("src","img/favorites-light.jpg");
            } else {
                $( '#pic-1' ).attr("src", "img/favorites-night.jpg");
            }
        },  function() {
    });
    
    $("#item-3").hover(
        function() {
            if(theme === "light") {
                $( '#pic-1' ).attr("src","img/fare-calculation.jpg");
            } else {
                $( '#pic-1' ).attr("src","img/fare-calculation-night.jpg");
            }
        }, function() {
    });

    $("#item-4").hover(
        function() {
            if(theme === "light") {
                $( '#pic-1' ).attr("src","img/offline-routes.jpg");
            } else {
                $( '#pic-1' ).attr("src","img/offline-routes-night.jpg");
            }
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
        $('#toggle-btn').css({"background-color": "white", "color": "black"});
        $("#features").css('background-color', '#17263c');
        $("#features").css('color', 'white');
        $("#features").css('transition', 'background-color 0.5s');
        $('#feature-title').text('Introducing Night Mode');
        $( '#pic-1' ).attr("src","img/night-mode.jpg");
        $('header.masthead').css('background', '#17263c');
        $('header.masthead').css('transition', 'background-color 0.5s');
        $('#mainNav .navbar-brand').css('color', '#fff !important');
    }

    function light_mode() {
        theme = "light";
        $('#toggle-btn').css({"background-color": "black", "color": "white"});
        $("#features").css('background-color', 'white');
        $("#features").css('color', 'black');
        $("#features").css('transition', 'background-color 0.3s');
        $('#feature-title').text('New Features are Available');
        $( '#pic-1' ).attr("src","img/light-mode.jpg");
        $('header.masthead').css('background', '#ff7f57');
        $('header.masthead').css('transition', 'background-color 0.5s');
        $('#mainNav .navbar-brand').css('color', '#17263c !important');
    }
});
