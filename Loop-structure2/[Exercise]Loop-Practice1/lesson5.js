let n = 20; // số lượng số trong dãy Fibonacci cần tính tổng

let a = 0, b = 1, c, sum = 0;
sum += a; // cộng số đầu tiên vào tổng

// tính tổng 19 số tiếp theo trong dãy Fibonacci
for (let i = 2; i <= n; i++) {
  c = a + b;
  sum += c;
  a = b;
  b = c;
}

document.write("Tổng của 20 số đầu tiên trong dãy Fibonacci là: " + sum);