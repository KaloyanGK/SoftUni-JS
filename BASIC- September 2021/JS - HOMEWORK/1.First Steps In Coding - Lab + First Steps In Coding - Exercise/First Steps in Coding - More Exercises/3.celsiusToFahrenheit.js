function celsiusToFahrenheit(input){
let c =Number(input[0]);
let f = c* 1.8 +32;

let ff=f.toFixed(2);
console.log(ff);

}
celsiusToFahrenheit([`25`]);