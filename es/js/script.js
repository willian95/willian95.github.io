var sections = ['Home', 'About-me', 'Services', 'Skills', 'Portfolio', 'Carreer', 'Contact']
var isSidebarOpen = false;

$(document).scroll(function() {

    if($(document).scrollTop() > 20){
        $("#navbar").addClass('solid-navbar')

    }else{
        $("#navbar").removeClass('solid-navbar')
    }

    setPosition($(document).scrollTop())

})

function setPosition(scrollTop){

    var current;
    for (var i = 0; i < sections.length; i++) {

        if ( $('.'+sections[i]).offset().top <= $(window).scrollTop() ) {
            current = sections[i];
        }
    }
    $("."+current+"-btn").addClass('active')
    $('.navbar-nav li').not("."+current+"-btn").removeClass('active');
    $('#sidebar li').not("."+current+"-btn").removeClass('active');  

}

$(".Home-btn").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $(".Home").offset().top +10
    }, 2000);
});

$(".About-me-btn").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top +10
    }, 2000);
});

$(".Services-btn").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#services").offset().top +10
    }, 2000);
});

$(".Skills-btn").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#skills").offset().top +10
    }, 2000);
});


$(".Portfolio-btn").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#portfolio").offset().top +10
    }, 2000);

});

$(".Carreer-btn").click(function() {


    $([document.documentElement, document.body]).animate({
        scrollTop: $("#timeline").offset().top +10
    }, 2000);
});

$(".Contact-btn").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $(".Contact").offset().top +10
    }, 2000);
});

function toggleSidebar(){
    
    if(!isSidebarOpen){
        openSidebar()
    }else{
        closeSidebar()
    }

}

function openSidebar(){

    $("#sidebar").css('display', 'block')
    $("#sidebar").removeClass('slideOutLeft animated')
    $("#sidebar").addClass('slideInLeft animated')

    isSidebarOpen = true

}

function closeSidebar(){

    $("#sidebar").removeClass('slideInLeft animated')
    $("#sidebar").addClass('slideOutLeft animated')

    isSidebarOpen = false

}


