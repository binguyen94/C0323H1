
// let i;

// for (i = 0; i < 5; i++) {
//     document.write("The number is" + i+"<br>");
// }

// let i ;
// for (i=0; i<5 ; i++){
//     document.getElementById("demo").innerHTML+=("This number is" + i + "<br>");
// }
let text = "";
let i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;