function BasketballEquipment(input) {

    let trainers = Number(input[0]);

    let sneakers = trainers - trainers * 0.40;
    let equipment = sneakers - sneakers * 0.20;
    let ball = equipment / 4;
    let acc = ball / 5;

    let result = sneakers +equipment +  ball + acc + trainers;

    console.log(result);


}

BasketballEquipment([`550`]);