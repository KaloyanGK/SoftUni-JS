function solve(params) {
    let sorted = params.sort((a, b) => {
        return a.localeCompare(b);

    })

    //Вариант 1 за изкарване на списъка
    // for (let i = 0; i < sorted.length; i++) {  
    //     console.log(`${i+1}.${sorted[i]}`)
    // }

    //Вариант 2 за изкарване на списъка
    let number = 1;
    sorted.forEach((name) => {
        console.log(`${number}.${name}`);
        number++
    });

}
solve(["John", "Bob", "Christina", "Ema"])
