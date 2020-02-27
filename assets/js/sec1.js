$(window).on('load', function () {
    $('.preload').addClass('complete');
});

$(document).ready(function () {
    $('.nav-responsive').click(function () {
        $('.menu').toggleClass('normal');
        $('.nav-responsive').toggleClass('active');
    })
})