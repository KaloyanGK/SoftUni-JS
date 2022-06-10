// //Global context
// function solve() {

//     console.log(this);
// }
// solve()  // глабално извикване на функция - Global Invocation

// //Object context

// let object = {

//     name: `Kaloyan`,
//     sayHi() {

//         console.log(`my name is ${this.name}`);
//         solve() // глабално извикване на функция - Global Invocation

//     }

// }
// object.sayHi()  //метод на функция

// let sayHello = object.sayHi;  //копираме функция по референция - бутаме я в променлива
// sayHello();                     //глабално извикване на функция - Global Invocation

// в ДОМ елемента this е сочи към елемента в който сме сложили even-ta;
// пример :
//let button = document.getElementById(`btn`);
// button.addEventListener(`click`,function(e){
//     console.log(this); --> this сочи към button // в този случай ПОЛЗВАМЕ (е), което е същото
// })

//----Вложени функции----//

// function a() {
//   function b() {
//     function c() {
//       console.log(this);
//     }
//     c();
//   }
//   b();
// }
// a();

//---------------------------//
// function solve() {
//   let a = 5;
//   let b = 5;

//   function math(n) {
//     console.log(a + b + n);
//   }
//   return {
//     math,
//   }
// }
// let result = solve();
// result.math(5)
///-------------------//

//Първа функция събира , втората умножава и в една променлива събираме резултатите
// function first(a, b) {
//   return a + b
// }
// function second(a,b){
//   return a*b
// }

// let x = first(5,5)+second(5,5);
// console.log(x);
//----------------------//



//---CLOSURE - КЛОЖЪР---//
 




