function solve(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(solve(1)(1)(1))