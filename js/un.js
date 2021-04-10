$(window).scroll(function() {

    if ($(this).scrollTop() >= 500) {
        $(".navbar").addClass("color");
    } else {
        $(".navbar").removeClass("color");
    }
    if ($(this).scrollTop() >= 500) {
        $(".navbar ul li").addClass("drop");
    } else {
        $(".navbar ul li").removeClass("drop");
    }
});