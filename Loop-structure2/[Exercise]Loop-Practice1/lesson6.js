let count = 0; // biến đếm số lượng số chia hết cho 7 đã tìm được
let sum = 0; // biến lưu trữ tổng của các số chia hết cho 7
let i = 1; // số tự nhiên đầu tiên cần kiểm tra

while (count < 30) {
  if (i % 7 === 0) {
    count++;
    sum += i;
  }
  i++;
}

document.write("Tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên là: " + sum);