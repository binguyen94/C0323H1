// let number ; 
// do  {
//     number = parseInt(prompt("Nhập các số từ 1 đến 10: "));
//     if (number <1 || number >10 || isNaN(number)){
//         alert("Số vừa nhập không hợp lệ. Vui lòng nhập lại");
//     }else{
//         document.write("Số bạn vừa nhập là :" + number )
//     }
// }while (!( number >=1 && number <=10)) ;


// let number ;
// do {
//     number = parseInt(prompt("Nhập một số từ 1 đến 10: "));
// }while (number <1 || number>10 || isNaN(number) )
// document.write("Số bạn vừa nhập là: " + number );


let number;
while (number <1 || number>10 || isNaN(number) ){
    number = parseInt(prompt("Nhập một số từ 1 đến 10: "));
    if (number <1 || number>10 || isNaN(number)) {
        alert("Số vừa nhập không hợp lệ. Vui lòng nhập lại");
    }else {
        document.write ("Số bạn vừa nhập là : "+ number)
    }
}


