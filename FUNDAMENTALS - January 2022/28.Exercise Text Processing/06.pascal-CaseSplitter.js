function demo(text) {

    let result = ``;
    for (let i = 0; i < text.length; i++) {
        let currentWord = text[i];
        let currWordUp = currentWord.toUpperCase()
        if (i > 1 && currentWord === currWordUp) {
            result += `, ${currentWord}`
        } else {
            result += currentWord
        }

    }
    console.log(result);
}
demo('SplitMeIfYouCanHaHaYouCantOrYouCan')