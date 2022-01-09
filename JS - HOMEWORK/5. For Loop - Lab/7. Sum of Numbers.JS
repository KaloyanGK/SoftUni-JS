function sum(input) {
    let chislo = input[0];
    let sum = 0;

    for (let i = 0; i < chislo.length; i++) {
        sum += Number(chislo[i]);
    }

    console.log(`The sum of the digits is:${sum}`);
} sum(["1234"])