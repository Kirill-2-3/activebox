$(function() {
    let header = $("#header");
    let intro = $("#intro");
    let scrollPos;
    let introH;
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    /* Fixed header */

    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();
        introH = $(intro).innerHeight();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });



    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementScroll = $(this).data("scroll");
        let elementOffSet = $(elementScroll).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffSet - 70
        }, 700);
    });



    /* Burger */

    $(navToggle).on("click", function(e) {
        e.preventDefault();

        $(nav).toggleClass("show");
    })
});