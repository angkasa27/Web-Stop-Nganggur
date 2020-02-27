const pcc = $(window).scrollTop();
console.log(pcc);

$(window).scroll(function () {
    $('#judul1, #judul2, #judul3, #gambar1, #gambar2, #gambar3').css("transition", ".8s");

    if ($(this).scrollTop() > 405 && $(this).scrollTop() < 1068) {
        $('#judul1').css("transform", "translate(0,-50%)");
        $('#gambar1').css("transform", "translate(0,-50%)");
    } else {
        $('#judul1').css("transform", "translate(-150%,-50%)");
        $('#gambar1').css("transform", "translate(150%,-50%)");
    }

    if ($(this).scrollTop() > 870 && $(this).scrollTop() < 1538) {
        $('#judul2').css("transform", "translate(0,-50%)");
        $('#gambar2').css("transform", "translate(0,-50%)");
    } else {
        $('#judul2').css("transform", "translate(150%,-50%)");
        $('#gambar2').css("transform", "translate(-150%,-50%)");
    }

    if ($(this).scrollTop() > 1305 && $(this).scrollTop() < 1947) {
        $('#judul3').css("transform", "translate(0,-50%)");
        $('#gambar3').css("transform", "translate(0,-50%)");
    } else {
        $('#judul3').css("transform", "translate(-150%,-50%)");
        $('#gambar3').css("transform", "translate(150%,-50%)");
    }
});