// let number = parseInt(prompt("Nhập n số nguyên tố đầu tiên: ")); 
// checkNT(number);
// function checkNT(number) {
//     let count = 0; 
//     let countSNT = 0; 
//     for (let i = 2; i < 1000; i++) { 
//         if (countSNT < number) { 
//             for (let j = 1; j <= i; j++) {
//                 if (i % j == 0) {
//                     count += 1;
//                 }
//             }
//             if (count == 2) {
//                 document.write(i + "<br>"); 
//                 countSNT += 1; 
//             }
//             count = 0;
//         } else {
//             break;
//         }
//     }
// }


// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2 || num === 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     let i = 5;
//     while (i * i <= num) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//       i += 6;
//     }
//     return true;
// }

  
// function showPrimes(num) {
//     let primes =  [];
//     let i = 2;
//     while (primes.length < num) {
//       if (isPrime(i)) {
//         primes.push(i);
//       }
//       i++;
//     }
//     let result = primes.join(", ");
//     document.write(n + ` số nguyên tố đầu tiên là: ${result}`);
// }
let n = parseInt(prompt("Nhập số lượng số nguyên tố cần hiển thị: "));
showPrimes(n);

function isPrime(n) {
  let isPrime = true
  if (n <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(n); i++) { 
    if (n % i === 0) {
      return false; 
    }
  }
  return true;
}
function showPrimes(numbs){
  let primes =[];
  for ( let i = 0 ; primes.length<numbs; i++){
    if( isPrime(i)){
      primes.push(i);
    }
  }
  let result = primes.join(",");
  console.log(n + ` số nguyên tố đầu tiên là: ${result}` );
}


  
  




