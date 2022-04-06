function calculator(first, sign, second) {
    let result = 0;
    switch (sign) {
        case `-`: result = first - second; break
        case `+`: result = first + second; break
        case `/`: result = first / second; break
        case `*`: result = first * second; break

    }
    console.log(result.toFixed(2));
} calculator(5, '+', 10)
calculator(25.5, '-', 3)
