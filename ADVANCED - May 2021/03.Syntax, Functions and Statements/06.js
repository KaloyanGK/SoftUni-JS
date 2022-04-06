function solve(a, b) {
    a = Number(a);
    b = Number(b);
    let result = 0
    for (let i = a; i <= b; i++) {
        result += i;
    }
    console.log(result);

}
solve('1', '5')
solve('-8', `20`)