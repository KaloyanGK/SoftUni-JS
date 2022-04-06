function outfit(input) {

    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = 0;
    let shoes = 0;

    if (10 <= degrees && degrees <= 18 && timeOfDay === "Morning") {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
    } else if (10 <= degrees && degrees <= 18 && timeOfDay === "Afternoon") {
        outfit = "Shirt";
        shoes = "Moccasins";

    } else if (10 <= degrees && degrees <= 18 && timeOfDay === "Evening") {
        outfit = "Shirt";
        shoes = "Moccasins";
    }

    if (18 < degrees && degrees <= 24 && timeOfDay === "Morning") {
        outfit = "Shirt";
        shoes = "Moccasins";
    } else if (18 < degrees && degrees <= 24 && timeOfDay === "Afternoon") {
        outfit = "T-Shirt";
        shoes = "Sandals";
    } else if (18 < degrees && degrees <= 24 && timeOfDay === "Evening") {
        outfit = "Shirt";
        shoes = "Moccasins";

    } if (degrees >= 25 && timeOfDay === "Morning") {
        outfit = "T-Shirt";
        shoes = "Sandals";
    } else if (degrees >= 25 && timeOfDay === "Afternoon") {
        outfit = "Swim Suit";
        shoes = "Barefoot";
    } else if (degrees >= 25 && timeOfDay === "Evening") {
        outfit = "Shirt";
        shoes = "Moccasins";
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
} outfit(["28",
    "Evening"])