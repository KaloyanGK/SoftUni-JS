function invalidNumber(input) {



    let n = Number(input[0]);
    let b = n >= 100 && n <= 200 || n == 0;
    if (!b) {
        console.log("isValid");
    }
}


invalidNumber(["100"])