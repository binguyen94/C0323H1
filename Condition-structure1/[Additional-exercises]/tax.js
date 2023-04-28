// let value=Number(prompt("Nhập thu nhập của bạn (đơn vị VND): "));
// if (value>0&&value<=5000000){
//     alert("Thuế TNCN phải nộp là: " + (price=(value*0.05))+' VND');
// }else if (value>5000000&&value<=10000000){
//     alert("Thuế TNCN phải nộp là: " + (price=(value*0.1-250000))+' VND');
// }else if (value>10000000&&value<=18000000){
//     alert("Thuế TNCN phải nộp là: " + (pice=(value*0.15-750000))+' VND');
// }else if (value>18000000 && value <=32000000){
//     alert("Thuế TNCN phải nộp là: " + (price=(value*0.2-1650000))+' VND');
// }else if (value >32000000 && value <=52000000){
//     alert ("Thuế TNCN phải nộp là: "+ (price=(value*0.25-3250000))+' VND');
// }else if (value >52000000 && value <=80000000){
//     alert ("Thuế TNCN phải nộp là: "+ (price=(value*0.3-5850000))+' VND');
// }else if (value >80000000){
//     alert("Thuế TNCN phải nộp là:" + (price=(value*0.35-9850000))+' VND');
// }else
//     alert("Xin vui lòng nhập lại chính xác thu nhập của bạn !");



function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


let income = Number(prompt("Nhập thu nhập của bạn (đơn vị VND): "));
// switch(true){
//     case(income>0&&income<=5000000):
//     alert("Thuế TNCN phải nộp là: " + numberWithCommas((price=(income*0.05)))+' VND');break;
//     case(income>5000000&&income<=10000000):
//     alert("Thuế TNCN phải nộp là: " + numberWithCommas((price=(income*0.1-250000)))+' VND');break;
//     case(income>10000000&&income<=18000000):
//     alert("Thuế TNCN phải nộp là: " + numberWithCommas((pice=(income*0.15-750000)))+' VND');break;
//     case(income>18000000 && income <=32000000):
//     alert("Thuế TNCN phải nộp là: " + numberWithCommas((price=(income*0.2-1650000)))+' VND');break;
//     case(income >32000000 && income <=52000000):
//     alert ("Thuế TNCN phải nộp là: "+ numberWithCommas((price=(income*0.25-3250000)))+' VND');break;
//     case(income >52000000 && income <=80000000):
//     alert ("Thuế TNCN phải nộp là: "+ numberWithCommas((price=(income*0.3-5850000)))+' VND');break;
//     case (income >80000000):
//     alert("Thuế TNCN phải nộp là: " + numberWithCommas((price=(income*0.35-9850000)))+' VND');break;
//     default:
//     alert("Xin vui lòng nhập lại chính xác thu nhập của bạn !");break;
// }


function incomeCalculation() {
    let price = 0 ; 

    switch (true) {
        case (income > 0 && income <= 5000000):
            price = (income * 0.05); break;
        case (income > 5000000 && income <= 10000000):
            price = (income * 0.1 - 250000); break;
        case (income > 10000000 && income <= 18000000):
            pice = (income * 0.15 - 750000); break;
        case (income > 18000000 && income <= 32000000):
            price = (income * 0.2 - 1650000); break;
        case (income > 32000000 && income <= 52000000):
            price = (income * 0.25 - 3250000); break;
        case (income > 52000000 && income <= 80000000):
            price = (income * 0.3 - 5850000); break;
        case (income > 80000000):
            price = (income * 0.35 - 9850000); break;

    }
    return price; 
}
let price = incomeCalculation();
if (price > 0 ){
    alert("Thuế TNCN phải nộp là: " + numberWithCommas(price) + ' VND');
}else{
    alert("Xin vui lòng nhập lại chính xác thu nhập của bạn !");
}




