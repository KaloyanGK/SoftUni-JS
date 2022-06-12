function solve(face, paint) {

    let faces = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`];
    if (!faces.includes(face)) {
        throw new Error(`Invalid Face`);
    }

    let paintObj = {
        S: `♠`,
        H: `♥`,
        D: `♦`,
        C: `♣`,

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

solve('1', 'C')