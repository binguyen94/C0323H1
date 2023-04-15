
// let value = +prompt("Nhập số điện năng tiêu thụ:")
// if (value >= 0 && value <= 50) {
//     alert("Bậc thang 1");
//     let price = value * 1678;
//     alert("Tổng tiền điện cần thanh toán là: " + price + ' VND');
// }
// else if (value >= 51 && value <= 100) {
//     alert("Bậc thang 2");
//     let price = (50 * 1678) + ((value - 50) * 1734);
//     alert("Tổng tiền điện cần thanh toán là: " + price + ' VND');
// } else if (value >= 101 && value <= 200) {
//     alert("Bậc thang 3");
//     let price = 50 * 1678 + 50 * 1734 + ((value - 100) * 2014);
//     alert("Tổng tiền điện cần thanh toán là: " + price + ' VND');
// } else if (value >= 201 && value <= 300) {
//     alert("Bậc thang 4");
//     let price = 50 * 1678 + 50 * 1734 + 100 * 2 - 14 + ((value - 200) * 2536);
//     alert("Tổng tiền điện cần thanh toán là: " + price + ' VND');
// } else if (value >= 301 && value <= 400) {
//     alert("Bậc thang 5");
//     let price = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + ((value - 300) * 2834);
//     alert("Tổng tiền điện cần thanh toán là: " + price + ' VND');
// } else if (value > 400) {
//     alert("Bậc thang 6");
//     let price = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + ((value - 400) * 2927);
//     alert("Tổng tiền điện cần thanh toán là: " + price +  ' VND');
// } else
//     alert("Nhập lại chính xác số điện của bạn");





let value = +prompt("Nhập số điện năng tiêu thụ:") ;
    value >= 0 && value <= 50
    ?alert("Bậc thang 1" + " Tổng tiền điện cần thanh toán là: " + (value * 1678) + ' VND')
    : value >= 51 && value <= 100
    ?alert("Bậc thang 2" + " Tổng tiền điện cần thanh toán là: " + (50 * 1678) + ((value - 50) * 1734) + ' VND')
    : value >= 101 && value <= 200
    ?alert("Bậc thang 3" + " Tổng tiền điện cần thanh toán là: " + (50 * 1678 + 50 * 1734 + ((value - 100)) * 2014)+ ' VND')
    :value >= 201 && value <= 300
    ?alert("Bậc thang 4" + " Tổng tiền điện cần thanh toán là: " + (50 * 1678 + 50 * 1734 + 100 * 2 - 14 + ((value - 200) * 2536))+ ' VND')
    :value >= 301 && value <= 400
    ?alert("Bậc thang 5" + " Tổng tiền điện cần thanh toán là: " + (50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + ((value - 300) * 2834)) + ' VND')
    :value > 400
    ?alert("Bậc thang 6" + " Tổng tiền điện cần thanh toán là: " + (50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834 + ((value - 400) * 2927)) + ' VND')
    :alert("Nhập lại chính xác số điện của bạn");




