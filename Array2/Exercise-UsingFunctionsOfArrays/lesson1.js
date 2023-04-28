// Viết một chương trình Javascript để 
// nối tất cả các phần tử trong một mảng chuỗi lại với nhau



// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join(","));

let text = "Hello";
let myArr = text.split("");

text = "";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + "<br>"
}

console.log(text);