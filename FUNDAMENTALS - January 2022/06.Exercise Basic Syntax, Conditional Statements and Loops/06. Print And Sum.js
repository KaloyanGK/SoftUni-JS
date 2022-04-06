function demo(a, b) {
    let sum = 0;
    let c = ``;
    for (let i = a; i <= b; i++) {
        sum += i;
        c += i + ` `;
    }
    console.log(c);
    console.log(`Sum: ${sum}`);
} demo(5, 10)