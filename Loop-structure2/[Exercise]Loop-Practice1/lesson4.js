let a = 0, b = 1, c, i = 1;
while(true) {
  c = a + b;
  a = b;
  b = c;
  i++;
  if(c % 5 === 0) {
    document.write("Số đầu tiên trong dãy Fibonacci chia hết cho 5 là: " + c);
    break;
  }
}
