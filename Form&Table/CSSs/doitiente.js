function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let ToC = document.getElementById("To").value;
    let Result;

    if (FromC == "USD" && ToC == "VND") {
        Result = "Result: " + (Amount * 23000) + " Đ";
    }
    else if (FromC == "VND" && ToC == "USD") {
        Result = "Result: " + (Amout / 23000) + " $";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount +" Đ"
    } else {
        Result = "Result: " + Amount +" $"
    }
    document.getElementById("Result").innerHTML = Result;
    }