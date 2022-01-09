function suppliesForSchool(input){ 

    let himikali = Number(input[0]);
    let markeri = Number(input[1]);
    let preparat = Number(input[2]);
    let otstupka = Number(input[3]);

    let obshtoHimikali = himikali * 5.80;
    let obshtoMarkeri = markeri * 7.20;
    let obshtoPreparat = preparat * 1.20;

    let total = (obshtoHimikali + obshtoMarkeri + obshtoPreparat);
    let total2 = total - (total * 0.25)

    console.log(total2);
}

suppliesForSchool(["2 ", "3 ","4 ","25"])