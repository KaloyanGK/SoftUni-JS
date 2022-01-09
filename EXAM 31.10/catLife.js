function catLife(input) {
    let poroda = input[0];
    let pol = input[1];
    let period = 0;

    if (pol === `m`) {
        switch (poroda) {
            case `British Shorthair`: period = 13 * 12; break;
            case `Siamese`: period = 15 * 12; break;
            case `Persian`: period = 14 * 12; break;
            case `Ragdoll`: period = 16 * 12; break;
            case `American Shorthair`: period = 12 * 12; break;
            case `Siberian`: period = 11 * 12; break;
        }
    } else if (pol === `f`) {
        switch (poroda) {
            case `British Shorthair`: period = 14 * 12; break;
            case `Siamese`: period = 16 * 12; break;
            case `Persian`: period = 15 * 12; break;
            case `Ragdoll`: period = 17 * 12; break;
            case `American Shorthair`: period = 13 * 12; break;
            case `Siberian`: period = 12 * 12; break;
        }
    }
    let catsMonths = Math.floor(period / 6);
    if (poroda === `British Shorthair` || poroda === `Siamese` || poroda === `Persian` || poroda === `Ragdoll` || poroda === `American Shorthair` || poroda === `Siberian`) {
        console.log(`${catsMonths} cat months`);
    } else {
        console.log(`${poroda} is invalid cat!`);
    }


} catLife(["Tom",
    "m"])





