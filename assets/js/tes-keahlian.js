$('#mulai').click(function () {
    $('.mulai').css("display", "none");
    $('#soal1').css("display", "block");
    var kreator = 0, pangusaha = 0;
    $('#ya1, #tidak1').click(function () {
        $('#soal1').css("display", "none");
        $('#soal2').css("display", "block");
    });
    $('#ya2, #tidak2').click(function () {
        $('#soal2').css("display", "none");
        $('#soal3').css("display", "block");
    });
    $('#ya3, #tidak3').click(function () {
        $('#soal3').css("display", "none");
        $('#soal4').css("display", "block");
    });
    $('#ya4, #tidak4').click(function () {
        $('#soal4').css("display", "none");
        $('#soal5').css("display", "block");
    });
    $('#ya5, #tidak5').click(function () {
        $('#soal5').css("display", "none");
        $('.selesai').css("display", "block");
    });
});