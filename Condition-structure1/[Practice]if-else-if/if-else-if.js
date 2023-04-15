let myName = prompt("Nhập tên:");
if (myName == "Admin") {
    let pass = prompt("Nhập mật khẩu:")
        if(pass == "TheMaster"){
        alert ("Welcome");
    }
    else if (pass == null) {
        alert ("Canceled");
    }
    else {
        alert ("Wrong password");
    }
}else if (myName== null){
    alert ("canceld");
}else {
    alert("I don't know you") ;
}
