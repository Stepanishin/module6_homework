// let func = (x, n) => {
//   if (n == 0) {console.log(1)} else {
//   for (let i = 1; i < n; i++) {
//     x *= x
//   }
//   console.log(x)
//   }
// }

// func(3,2)

let func = (x, n) => Math.pow(x, n);

console.log(func(2,4))