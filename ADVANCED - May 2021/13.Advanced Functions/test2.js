function solve() {
    let a = 5;
    let b = 5;

    return function math() {
        let c = 5;
        console.log(a + b + c);
    }

}
let result = solve();
result()

// function solve() {
//     let a = 5;
//     let b = 5;
  
//     function math(n) {
//       console.log(a + b + n);
//     }
//     return {
//       math,
//     }
//   }
//   let result = solve();
//   result.math(5)