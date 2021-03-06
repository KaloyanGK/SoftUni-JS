function solve(face, paint) {

    let faces = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`];
    let paintObj = {
        S: `♠`,
        H: `♥`,
        D: `♦`,
        C: `♣`,

    }
    if (!faces.includes(face)) {
        throw new Error(`Invalid Face`);
    }


    let card = {
        face,
        paint: paintObj[paint],
        toString() {
            return this.face + this.paint
        }
    }
    return card;

}

console.log(solve('A', 'S').toString())
console.log(solve('1', 'C').toString())