$(window).scroll(function () {
    // Sec2
    $('#judul-sec2, #masalah1, #masalah2, #masalah3, #judul-sec3, #langkah3, #judul-sec4, t1, t2, t3').css("transition", ".5s");
    $('#langkah3').css("transition", "1s");
    $('#kontenL1, #gambarL1, #kontenL2, #gambarL2').css("transition", ".8s");

    if ($(this).scrollTop() > 112 && $(this).scrollTop() < 791) {
        $('#judul-sec2').css("opacity", "1");
    } else {
        $('#judul-sec2').css("opacity", "0");
    }

    if ($(this).scrollTop() > 465 && $(this).scrollTop() < 1153) {
        $('#masalah1').css("opacity", "1");
    } else {
        $('#masalah1').css("opacity", "0");
    }

    if ($(this).scrollTop() > 946 && $(this).scrollTop() < 1704) {
        $('#masalah2').css("opacity", "1");
    } else {
        $('#masalah2').css("opacity", "0");
    }

    if ($(this).scrollTop() > 1506 && $(this).scrollTop() < 2280) {
        $('#masalah3').css("opacity", "1");
    } else {
        $('#masalah3').css("opacity", "0");
    }

    // sec3
    if ($(this).scrollTop() > 1927 && $(this).scrollTop() < 2555) {
        $('#judul-sec3').css("opacity", "1");
    } else {
        $('#judul-sec3').css("opacity", "0");
    }

    if ($(this).scrollTop() > 2255 && $(this).scrollTop() < 3029) {
        $('#kontenL1').css("transform", "translate(0,-50%)");
        $('#gambarL1').css("transform", "translate(0,-50%)");
    } else {
        $('#kontenL1').css("transform", "translate(-150%,-50%)");
        $('#gambarL1').css("transform", "translate(150%,-50%)");
    }

    if ($(this).scrollTop() > 2848 && $(this).scrollTop() < 3720) {
        $('#kontenL2').css("transform", "translate(0,-50%)");
        $('#gambarL2').css("transform", "translate(0,-50%)");
    } else {
        $('#kontenL2').css("transform", "translate(150%,-50%)");
        $('#gambarL2').css("transform", "translate(-150%,-50%)");
    }

    if ($(this).scrollTop() > 3607 && $(this).scrollTop() < 4280) {
        $('#langkah3').css("opacity", "1");
    } else {
        $('#langkah3').css("opacity", "0");
    }

    // sec4
    if ($(this).scrollTop() > 3900) {
        $('#judul-sec4, #t1, #t2, #t3').css("opacity", "1");
    } else {
        $('#judul-sec4, #t1, #t2, #t3').css("opacity", "0");
    }
});