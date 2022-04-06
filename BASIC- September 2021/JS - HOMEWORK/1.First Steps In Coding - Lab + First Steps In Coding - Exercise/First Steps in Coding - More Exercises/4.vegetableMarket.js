function vegetableMarket(input){
let z=Number(input[0]);
let p=Number(input[1]);
let kgZ=Number(input[2]);
let kgP=Number(input[3]);

let totalZ= z * kgZ;
let totalP= p * kgP;

let total = totalZ + totalP;
let euro= total / 1.94;

let euroF=euro.toFixed(2);
console.log(euroF);


}

vegetableMarket([`1.5`,`2.5`,`10`,`10`]);н