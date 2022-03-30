function check4() {
    var ht = f.HoTen.value;
    var ngay = f.Ngay.value;
    var thang= f.Thang.value;
    var nam = f.Nam.value;
    var nn= f.NgheNghiep.value;
    var gc =f.GhiChu.value;
    if (ht == '') {
        alert('Nhập họ tên vô đi bà');
        return false;
    }

    if (ngay == ''||thang == ''||nam == '') {
        alert('Không có ngày sao mà được');
        return false;
    }

    if (nn == '') {
        alert('Làm cái gì he');
        return false;
    }

    if (gc == '') {
        alert('Nhập vô cho biết chơi');
        return false;
    }
    
    
    return true;
}