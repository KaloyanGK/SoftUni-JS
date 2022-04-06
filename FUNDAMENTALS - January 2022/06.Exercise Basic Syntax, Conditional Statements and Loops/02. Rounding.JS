function rounding(n1, n2) {
    n1 = Number(n1);
    n2 = Number(n2)
    if (n2 > 15) {
        n2 = 15;
    }
    n1 = n1.toFixed(n2)
    console.log(parseFloat(n1));
} rounding(10.5, 3)