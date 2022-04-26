$(document).ready(function () {
    let i = 0;
    diemTB = [];

    $('#button1').click(function () {
        //tạo 1 hàng mới chứa các giá trị vừa nhập
        $('#table').append('<tr id="row' + i + '"></tr>');
        $('#row' + i).append('<td>' + i + '</td>');
        $('#row' + i).append('<td>' + $('#name').val() + '</td>');
        $('#row' + i).append('<td>' + $('#mathPoint').val() + '</td>');
        $('#row' + i).append('<td>' + $('#physicPoint').val() + '</td>');
        $('#row' + i).append('<td>' + $('#chemicPoint').val() + '</td>');
        $('#row' + i).append('<td id="diemTB_' + i + '">?</td>');

        //tính điểm trung bình và đưa vào mảng diemTB
        let mathP = parseFloat($('#mathPoint').val()) || 0;
        let physicP = parseFloat($('#physicPoint').val()) || 0;
        let chemicP = parseFloat($('#chemicPoint').val()) || 0;
        let diem = (mathP + physicP + chemicP) / 3
        diemTB[diemTB.length] = diem.toFixed(1);

        //xóa form 
        $('input').val('');

        //tăng i lên 1
        i += 1;
    });

    //Nhập điểm trung bình tính được phía trên vào bảng
    $('#button2').click(function () {
        for (j = 0; j <= i; j++) {
            $('#diemTB_' + j).text(diemTB[j]);
        }
    });

    //Xác định học sinh giỏi
    $('#button3').click(function () {
        for (j = 0; j < i; j++) {
            if (diemTB[j] >= 8) {
                $('#row' + j).addClass('hsg');
            }
        }
    });
});









































