
//  (number !=(-1)){
//     let number = Number(prompt("Nhập một số: "));
//     sum += number
//     alert("Tổng " + sum)
// }


// let sum = 0;
// let number = 0;
// while(number !== -1) {
//     number = parseInt(prompt("Nhập một số: "));
//     if (isNaN(number)){
//         alert ("Nhập lại số vừa nãy");
//     }
//     else if( number != -1 ){
//         sum += number;
//         alert(sum);
//     }
// }
// document.write("Tổng của số đã nhập là: " +sum)

let number = parseInt(prompt("Nhập vào một số:"));
let sum = 0;

while (number !== -1) {
  sum += number;
  alert("Số vừa nhập vào là " + number);
  alert("Tổng các số vừa nhập là: " + sum);
  number = parseInt(prompt("Nhập vào một số tiếp theo (hoặc nhập -1 để kết thúc):"));
}

document.write("Tổng các số vừa nhập là: " + sum);