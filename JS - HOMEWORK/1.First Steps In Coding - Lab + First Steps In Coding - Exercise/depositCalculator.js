function depositCalculator(input){

    let depozit= Number (input[0]);
    let srok= Number(input[1]);
    let glp= Number(input[2]);

    let lihva= depozit * (glp/100);
    let lihvaMesec= lihva / 12;
    let total = depozit + srok * lihvaMesec;

    console.log(total);
}

depositCalculator(["200 ", "3 ", "5.7 "])