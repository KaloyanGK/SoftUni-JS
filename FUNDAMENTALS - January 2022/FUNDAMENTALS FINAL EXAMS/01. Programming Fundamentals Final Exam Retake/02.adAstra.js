function solve(input) {
    let text = input[0]
    let pattern = /([#]|[|])([A-Za-z\s]+)\1(?<date>([0-9]{2})\/([0-9]{2})\/([0-9]{2}))\1(?<calories>[0-9]+)\1/g;
    let match
    let foodList = [];
    while (match = pattern.exec(text)) {
        foodList.push(match);
    }
    let totalCalories = 0;
    for (let el of foodList) {
        let calories = Number(el[7]);
        totalCalories += calories;
    }
    let days = 0;
    while (totalCalories >= 2000) {
        days++
        totalCalories -= 2000;
    }
    console.log(`You have food to last you for: ${days} days!`);
    for (let el of foodList) {

        console.log(`Item: ${el[2]}, Best before: ${el[3]}, Nutrition: ${Number(el[7])}`);
    }
}
solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])