function addBags(input){
let cenaBagaj = Number(input[0]);
let kg= Number(input[1])
let dni = Number(input[2])
let broiBagaj= Number(input[3])

let price = 0;
if(kg < 10){
 price = cenaBagaj * 0.2;
}else if(kg <= 20){
price = cenaBagaj * 0.5;
}else{
price = cenaBagaj;
}

if(dni > 30){
totalPrice = price + (price * 0.1);
}else if(dni>= 7){
totalPrice = price + (price * 0.15);
}else {
totalPrice = price + (price * 0.4);
}

let totalSum = totalPrice * broiBagaj;
console.log(`The total price of bags is: ${totalSum.toFixed(2)} lv.`)

}addBags(["63.80",
"23",
"3",
"1"])