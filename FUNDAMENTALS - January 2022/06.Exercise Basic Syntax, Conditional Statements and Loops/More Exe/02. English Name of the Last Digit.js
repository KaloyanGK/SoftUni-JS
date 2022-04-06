function englishNameOfDigit(number) {
    let lastDigit = number % 10;
    let numberAsText = ``;
    switch (lastDigit) {
        case 0: numberAsText = `zero`; break;
        case 1: numberAsText = `one`; break;
        case 2: numberAsText = `two`; break;
        case 3: numberAsText = `three`; break;
        case 4: numberAsText = `four`; break;
        case 5: numberAsText = `five`; break;
        case 6: numberAsText = `six`; break;
        case 7: numberAsText = `seven`; break;
        case 8: numberAsText = `eight`; break;
        case 9: numberAsText = `nine`; break;

    }
    console.log(numberAsText);
} englishNameOfDigit(512)
englishNameOfDigit(11)
englishNameOfDigit(1643)
