function powera(num, pow) {
    let result = 1;
    for (let i = 0; i < pow; i++) {
        result *= num
    }
    console.log(result);
} powera(2, 8)