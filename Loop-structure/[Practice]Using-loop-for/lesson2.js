let number = parseInt(prompt("Nhập số bất kì lớn hơn 0:"));
let sum = 0
let i;
while (!(number>0)){
    number = parseInt(prompt("Số nhập vào không hợp lệ, vui lòng nhập lại"));
}
for (let i = 1; i <= number; i ++) {
    sum += i;
   }
alert("Tổng các phần tử từ 1 đến " + number + " là: " + sum);


// let number= parseInt ( prompt (" Nhập một số lớn hơn 0: "));
// let i ;
// let sum= 0;

// for (i  = 1; i <= number ; i++){
//     sum += i
// }
// alert (" Tổng các số vừa nhập vào là " + sum);



