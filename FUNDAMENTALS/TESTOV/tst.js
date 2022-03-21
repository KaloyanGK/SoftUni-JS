function solve(word) {

    let newWord = word.split(``).reverse().join(``);
    let first = newWord.substring(newWord.length / 2);
    let second = newWord.substring(0, newWord.length / 2)
    console.log(first);
    console.log(second);

}

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
