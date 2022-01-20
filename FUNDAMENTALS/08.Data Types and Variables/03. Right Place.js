function rightPlace(word, char, match) {
    /* let newWord = word.replace(`_`, char)
     if (newWord === match) {
         console.log(`Matched`);
     } else {
         console.log(`Not Matched`);
     }
 */
    let result = ``;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == `_`) {
            result += char;
        } else {
            result += word[i];
        }

    }

    if (result == match) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }

} rightPlace('Str_ng', 'i', 'String')
rightPlace('Str_ng', 'I', 'Strong')