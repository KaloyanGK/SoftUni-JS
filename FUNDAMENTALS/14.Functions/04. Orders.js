function orders(drink, pcs) {

    let kindOfDrink = drink;
    let counts = pcs;
    let price = 0;
    
    if (kindOfDrink === `coffee`) {
        price = 1.5 * counts;
    } else if (kindOfDrink === `water`) {
        price = 1 * counts;
    } else if (kindOfDrink === `coke`) {
        price = 1.4 * counts;
    } else if (kindOfDrink === `snacks`) {
        price = 2 * counts;
    }
    console.log(price.toFixed(2));
}

orders("water", 5)
orders("coffee", 2)