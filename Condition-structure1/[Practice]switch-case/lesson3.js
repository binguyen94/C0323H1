// let value = prompt("Nhập một số",0);
// if (value>0){
//     alert(1);
// }else if (value<0){
//         alert(-1);
//     }
//     else {
//         alert(0) ;
//     }
let value = parseInt(prompt("Nhập một số:",0));
switch(true){
    case(value>0):
    alert(1);break;
    case(value<0):
    alert(-1);break;
    default:
    alert(0);break;
}