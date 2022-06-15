function solve(face, suit) {

    let faces = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`];
    let suits = {
        S: `♠`,
        H: `♥`,
        D: `♦`,
        C: `♣`,
    }
    if (!faces.includes(face)) {
        throw new Error(`Invalid Face`)
    }
    let object = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit
        }
    }

    return object;


}

console.log(solve('A', 'S').toString())
console.log(solve('1', 'C').toString())