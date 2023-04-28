let c = Number(prompt("Nhập nhiệt độ hiện tại: "))
while (c > 100 || c < 20 || isNaN(c)) {
    if (c > 100) {
        alert("Vui lòng giảm nhiệt độ!")
        c = prompt("Nhập nhiệt độ hiện tại: ")
    } else if (c < 20) {
        alert(" Vui lòng tăng nhiệt độ!")
        c = prompt("Nhập nhiệt độ hiện tại: ")
    } else if (isNaN(c)) {
        alert ("Nhiệt độ bạn nhập không hợp lệ!")
        c = prompt("Nhập nhiệt độ hiện tại: ")
    }
    
}
document.write("Nhiệt độ " + c + " của bạn là ổn định");