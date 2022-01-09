function trapeziodArea(input){
    let b1 =Number(input[0]);
    let b2=Number(input[1]);
    let h=Number(input[2]);

    let ta = (b1+b2)* h/2;
    let taFixed=ta.toFixed(2);

    console.log(taFixed);


}

trapeziodArea([`8`,`13`,`7`]);