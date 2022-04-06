function demo(input) {

    let target = Number(input[0])
    let sum = 0;
    let index = 1;


    while (sum < target) {
        let currentNumber = Number(input[index])
        sum += currentNumber
        index++

    } console.log(sum)



} demo(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])




