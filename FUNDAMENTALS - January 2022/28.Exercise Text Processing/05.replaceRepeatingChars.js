function solve(params) {
    let newP = params.split(``);
    for (let i = 0; i < newP.length; i++) {

        if (newP[i] == newP[i + 1]) {
            newP.splice(i, 1)
            i = -1;
        }
    }
    console.log(newP.join(``));


}
solve('kkkaallooyyaann')