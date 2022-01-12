function vacationBooksList(input){

    let stranici= Number(input[0]);
    let straniZaChas= Number(input[1]);
    let dni = Number(input[2]);

    let obshtoChasove= stranici / straniZaChas;
    let chasoveNaDen = obshtoChasove / dni;

    console.log(chasoveNaDen);


}

vacationBooksList(["432 ", "15 ", "4 "])