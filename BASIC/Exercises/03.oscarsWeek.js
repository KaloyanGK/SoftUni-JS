function demo(input) {

    let movie = input[0];
    let package = input[1];
    let tickets = Number(input[2]);
    let price = 0;
    if (movie === `A Star Is Born`) {
        switch (package) {
            case `normal`: price = 7.5 * tickets; break;
            case `luxury`: price = 10.5 * tickets; break;
            case `ultra luxury`: price = 13.5 * tickets; break;
        }
    } else if (movie === `Bohemian Rhapsody`) {
        switch (package) {
            case `normal`: price = 7.35 * tickets; break;
            case `luxury`: price = 9.45 * tickets; break;
            case `ultra luxury`: price = 12.75 * tickets; break;
        }
    } else if (movie === `Green Book`) {
        switch (package) {
            case `normal`: price = 8.15 * tickets; break;
            case `luxury`: price = 10.25 * tickets; break;
            case `ultra luxury`: price = 13.25 * tickets; break;
        }
    } else if (movie === `The Favourite`) {
        switch (package) {
            case `normal`: price = 8.75 * tickets; break;
            case `luxury`: price = 11.55 * tickets; break;
            case `ultra luxury`: price = 13.95 * tickets; break;
        }
    }
    console.log(`${movie} -> ${price.toFixed(2)} lv.`);
}
demo(["The Favourite",
    "ultra luxury",
    "34"])