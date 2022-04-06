function demo(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);


    let finalSum = 0;


    if (town === `Sofia`) {
        switch (product) {

            case `coffee`: finalSum = quantity * 0.5; break
            case `water`: finalSum = quantity * 0.8; break
            case `beer`: finalSum = quantity * 1.2; break
            case `sweets`: finalSum = quantity * 1.45; break
            case `peanuts`: finalSum = quantity * 1.6; break

        }


    } else if (town === `Plovdiv`) {
        switch (product) {


            case `coffee`: finalSum = quantity * 0.40; break
            case `water`: finalSum = quantity * 0.70; break
            case `beer`: finalSum = quantity * 1.15; break
            case `sweets`: finalSum = quantity * 1.30; break
            case `peanuts`: finalSum = quantity * 1.5; break

        }

    } else if (town === `Varna`) {
        switch (product) {

            case `coffee`: finalSum = quantity * 0.45; break
            case `water`: finalSum = quantity * 0.70; break
            case `beer`: finalSum = quantity * 1.10; break
            case `sweets`: finalSum = quantity * 1.35; break
            case `peanuts`: finalSum = quantity * 1.55; break

        }
    }

    console.log(finalSum);


}
demo(["coffee",
    "Varna",
    "2"])



