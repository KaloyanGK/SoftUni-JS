function giftsFromSanta(input) {


    let end = Number(input[0]);
    let start = Number(input[1]);
    let random = Number(input[2]);
    let str = ''
    for (let i = start; i >= end; i--) {
        if (i % 2 == 0 && i % 3 == 0) {
            if (i === random) {
                break;
            }
            str += i + " ";
        }
    }
    console.log(str);

} giftsFromSanta(["1",
    "30",
    "15"])


