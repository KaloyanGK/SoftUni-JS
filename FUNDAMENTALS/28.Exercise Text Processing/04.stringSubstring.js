function solve(word, text) {


        // МОЙ ВАРИАНТ НА РЕШЕНИЕ

        
    // let sentance = text.toLowerCase();
    // let newWord = word.toLowerCase();
    // sentance = sentance.split(` `);
    // let flag = true;
    // for (let el of sentance) {
    //     if (el === newWord) {
    //         flag = false;
    //         console.log(newWord);
    //         break;
    //     }

    // }
    // if (flag) {
    //     console.log(`${newWord} not found!`);
    // }


        //РЕШЕНИЕ НА ЛЕКТОР

    let sentance = text.toLowerCase();
    let newWord = word.toLowerCase();
    sentance = sentance.split(` `);
    if (sentance.includes(newWord)) {
        console.log(newWord);
    }else {
        console.log(`${newWord} not found!`);
    }


}
solve('javascript',
    'JavaScript is the best programming language'


)