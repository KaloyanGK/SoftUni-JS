function pipesInPool(input) {

    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let pipe1 = p1 * h;
    let pipe2 = p2 * h;

    total = pipe1 + pipe2;

    let totalPerc = total / v * 100;
    let p1Perc = pipe1 / total * 100;
    let p2Perc = pipe2 / total * 100;
    let totalLiters = Math.abs(total - v);

    if (total < v) {
        console.log(`The pool is ${totalPerc}% full. Pipe 1: ${p1Perc.toFixed(2)}%. Pipe 2: ${p2Perc.toFixed(2)}%.`)
    } else {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${totalLiters.toFixed(2)} liters.`)
    }



} pipesInPool([`1000`,
    `100`,
    `120`,
    `3

`])