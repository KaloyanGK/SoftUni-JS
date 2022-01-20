function demo(people, group, day) {
    let studentsFridayPrice = 8.45;
    let studentsSaturdayPrice = 9.80;
    let studentsSundayPrice = 10.46;
    let businesssFridayPrice = 10.9;
    let businessSaturdayPrice = 15.6;
    let businessSundayPrice = 16;
    let regularFridayPrice = 15;
    let regularSaturdayPrice = 20;
    let regularSundayPrice = 22.50;

    let studentsDiscountPercentege = 15;
    let businesDiscountCount = 10;
    let regularDiscountPercenege = 5;

    let totalPrice = 0;

    if (group === `Business` && people >= 100) {
        people -= businesDiscountCount;
    }

    if (group === `Students` && day === `Friday`) {
        totalPrice += people * studentsFridayPrice;
    } else if (group === `Students` && day === `Saturday`) {
        totalPrice += people * studentsSaturdayPrice;
    } else if (group === `Students` && day === `Sunday`) {
        totalPrice += people * studentsSundayPrice;
    } else if (group === `Regular` && day === `Friday`) {
        totalPrice += people * regularFridayPrice;
    } else if (group === `Regular` && day === `Saturday`) {
        totalPrice += people * regularSaturdayPrice;
    } else if (group === `Regular` && day === `Sunday`) {
        totalPrice += people * regularSundayPrice;
    } else if (group === `Business` && day === `Friday`) {
        totalPrice += people * businesssFridayPrice;
    } else if (group === `Business` && day === `Saturday`) {
        totalPrice += people * businessSaturdayPrice;
    } else if (group === `Business` && day === `Sunday`) {
        totalPrice += people * businessSundayPrice;
    }

    if (group === `Students` && people >= 30) {
        totalPrice -= studentsDiscountPercentege / 100 * totalPrice;
    } else if (group === `Regular` && people >= 10 && people <= 20) {
        totalPrice -= (regularDiscountPercenege / 100) * totalPrice;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
demo(30, "Students", "Sunday")
demo(40, "Regular", "Saturday")