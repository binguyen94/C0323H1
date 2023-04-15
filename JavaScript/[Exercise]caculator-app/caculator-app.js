function cong(){
    let num1=document.getElementById("s1").value;
    let num2=document.getElementById("s2").value;
    let rs= +num1 + +num2; //Number
    document.getElementById("kq").innerHTML= rs;
}
function tru(){
    let num1=document.getElementById("s1").value;
    let num2=document.getElementById("s2").value;
    let rs= num1 - num2;
    document.getElementById("kq").innerHTML= rs;
}
function nhan(){
    let num1=document.getElementById("s1").value;
    let num2=document.getElementById("s2").value;
    let rs= num1 * num2;
    document.getElementById("kq").innerHTML= rs;
}
function chia(){
    let num1=document.getElementById("s1").value;
    let num2=document.getElementById("s2").value;
    let rs= num1 / num2;
    document.getElementById("kq").innerHTML= rs;
}

