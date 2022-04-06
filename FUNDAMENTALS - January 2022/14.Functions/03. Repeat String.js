function format(string, number) {
    let result = ``;

    for (let i = 0; i < number; i++) {
        result += string;
    }
    console.log(result);
} format("abc", 3)