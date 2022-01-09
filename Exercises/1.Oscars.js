function oscars(input) {

    let rent = 5555;
    let counter = 0;
    let n = Number(input[0])
    let totalRent = rent;
    for (i = 1; i <= n; i++) {
        counter++;
        if (counter == 1) {
            rent -= rent * 0.3;
            totalRent += rent;
        } else if (counter == 2) {
            rent -= rent * 0.15;
            totalRent += rent;
        } else if (counter == 3) {
            rent -= rent / 2;
            totalRent += rent;
        }



    }
    console.log(totalRent.toFixed(2));
} oscars([`3`])