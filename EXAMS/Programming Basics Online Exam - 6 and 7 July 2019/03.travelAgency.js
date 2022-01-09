function demo(input) {

    let destination = input[0];
    let typeOfPackage = input[1];
    let vipOption = input[2];
    let days = Number(input[3]);

    let finalSum = 0;

    if (days < 1) {
        console.log(`Days must be positive number!`);
        return;
    }

    if (days > 7) {
        if (destination === "Borovets" || destination === "Bansko") {
            switch (typeOfPackage) {
                case "noEquipment": finalSum = (days - 1) * 80; break;
                case "withEquipment": finalSum = (days - 1) * 100; break;
            }
            if (typeOfPackage === "withEquipment") {
                switch (vipOption) {
                    case "no": finalSum = finalSum; break;
                    case "yes": finalSum = finalSum - (finalSum * 0.10); break;

                }
            } else if (typeOfPackage === "noEquipment") {
                switch (vipOption) {
                    case "no": finalSum = finalSum; break;
                    case "yes": finalSum = finalSum * 0.95; break;

                }
            }
        } else if (destination === "Burgas" || destination === "Varna") {
            switch (typeOfPackage) {
                case "withBreakfast": finalSum = (days - 1) * 130; break;
                case "noBreakfast": finalSum = (days - 1) * 100; break;
            }
            if (typeOfPackage === "noBreakfast") {
                switch (vipOption) {
                    case "no": finalSum = finalSum; break;
                    case "yes": finalSum = finalSum - (finalSum * 0.07); break;
                }
            } else if (typeOfPackage === "withBreakfast") {
                switch (vipOption) {
                    case "no": finalSum = finalSum; break;
                    case "yes": finalSum = finalSum - (finalSum * 0.12); break;
                }
            }
        }
    } else if (days <= 7) {
        if (destination === "Borovets" || destination === "Bansko") {
            switch (typeOfPackage) {
                case "noEquipment": finalSum = days * 80; break;
                case "withEquipment": finalSum = days * 100; break;
            }
            if (typeOfPackage === "withEquipment") {
                switch (vipOption) {
                    case "no": finalSum = finalSum; break;
                    case "yes": finalSum = finalSum - (finalSum * 0.10); break;

                }
            } else if (typeOfPackage === "noEquipment") {
                switch (vipOption) {
                    case "no": finalSum = finalSum; break;
                    case "yes": finalSum = finalSum * 0.95; break;

                }
            }
        } else if (destination === "Burgas" || destination === "Varna") {
            switch (typeOfPackage) {
                case "withBreakfast": finalSum = days * 130; break;
                case "noBreakfast": finalSum = days * 100; break;
            }
            if (typeOfPackage === "noBreakfast") {
                switch (vipOption) {
                    case "no": finalSum = finalSum; break;
                    case "yes": finalSum = finalSum - (finalSum * 0.07); break;
                }
            } else if (typeOfPackage === "withBreakfast") {
                switch (vipOption) {
                    case "no": finalSum = finalSum; break;
                    case "yes": finalSum = finalSum - (finalSum * 0.12); break;
                }
            }
        }
    }
    if ((destination !== "Burgas" && destination !== "Varna") && (destination !== "Borovets" && destination !== "Bansko")) {
        console.log(`Invalid input!`);

    } else if ((typeOfPackage !== "withBreakfast" && typeOfPackage !== "noBreakfast") && (typeOfPackage !== "noEquipment" && typeOfPackage !== "withEquipment")) {
        console.log(`Invalid input!`);
    } else {
        console.log(`The price is ${finalSum.toFixed(2)}lv! Have a nice time!`);
    }


} demo(["Burgas",
    "noBreakfast",
    "no",
    "4"])