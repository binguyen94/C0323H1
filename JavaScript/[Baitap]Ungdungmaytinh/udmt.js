function cong(){
    let num1=document.getElementById("s1").value;
    let num2=parseFloat(document.getElementById("s2").value);
    let rs= Number(num1) + Number(num2);
    document.getElementById("kq").innerHTML= rs;
}
function tru(){
    let num1=parseFloat(document.getElementById("s1").value);
    let num2=parseFloat(document.getElementById("s2").value);
    let rs= num1 - num2;
    document.getElementById("kq").innerHTML= rs;
}
function nhan(){
    let num1=parseFloat(document.getElementById("s1").value);
    let num2=parseFloat(document.getElementById("s2").value);
    let rs= num1 * num2;
    document.getElementById("kq").innerHTML= rs;
}
function chia(){
    let num1=parseFloat(document.getElementById("s1").value);
    let num2=parseFloat(document.getElementById("s2").value);
    let rs= num1 / num2;
    document.getElementById("kq").innerHTML= rs;
}

