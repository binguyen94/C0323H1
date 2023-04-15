 let diemToan = parseFloat(prompt('Nhập điểm Toán:')) ;
let diemHoa = parseFloat(prompt('Nhập điểm Hóa:'));
let diemLy = parseFloat(prompt('Nhập điểm Lý:'));
let dTong= diemToan+diemHoa+diemLy;
let dTrungBinh = dTong/3;
alert('Tổng điểm là:' + dTong);
alert('Điểm trung bình là :' + dTrungBinh)

