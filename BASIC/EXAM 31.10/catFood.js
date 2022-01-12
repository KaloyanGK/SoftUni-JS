function catFood(input) {

    let catsCount = Number(input[0]);
    let groupOne = 0;
    let groupTwo = 0;
    let groupThree = 0;
    let total = 0;
    for (let i = 1; i <= catsCount; i++) {
        let food = Number(input[i]);
        total += food;
        if (food >= 100 && food < 200) {
            groupOne++;
        } else if (food >= 200 && food < 300) {
            groupTwo++;
        } else {
            groupThree++;
        }

    }
    let totalFoodInGrams = total / 1000;
    let foodPerday = totalFoodInGrams * 12.45;



    console.log(`Group 1: ${groupOne} cats.`);
    console.log(`Group 2: ${groupTwo} cats.`);
    console.log(`Group 3: ${groupThree} cats.`);
    console.log(`Price for food per day: ${foodPerday.toFixed(2)} lv.`);



} catFood(["7",
    "100",
    "200",
    "342",
    "300",
    "234",
    "123",
    "212"])
