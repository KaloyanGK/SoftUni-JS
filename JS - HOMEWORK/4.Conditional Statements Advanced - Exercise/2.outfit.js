function summerOutfit(input) {


    let gradus = Number(input[0]);
    let day = input[1];
    let outfit = 0;
    let shoes = 0;

    if (gradus >= 10 && gradus <= 18) {
        switch (day) {
            case `Morning`:
                outfit = `Sweatshirt`;
                shoes = `Sneakers`;
                break;
            case `Afternoon`:
                outfit = `Shirt`;
                shoes = `Moccasins`; break;
            case `Evening`:
                outfit = `Shirt`;
                shoes = `Moccasins`;
                break;
        }
    } else if (gradus > 18 && gradus <= 24) {
        switch (day) {
            case `Morning`:
                outfit = `Shirt`;
                shoes = `Moccasins`;
                break;
            case `Afternoon`:
                outfit = `T-Shirt`;
                shoes = `Sandals`; break;
            case `Evening`:
                outfit = `Shirt`;
                shoes = `Moccasins`;
                break;
        }
    } else {
        switch (day) {
            case `Morning`:
                outfit = `T-Shirt`;
                shoes = `Sandals`;
                break;
            case `Afternoon`:
                outfit = `Swim Suit`;
                shoes = `Barefoot`; break;
            case `Evening`:
                outfit = `Shirt`;
                shoes = `Moccasins`;
                break;
        }
    }
    console.log(`It's ${gradus} degrees, get your ${outfit} and ${shoes}.`)

} summerOutfit(["28",
    "Evening"])


