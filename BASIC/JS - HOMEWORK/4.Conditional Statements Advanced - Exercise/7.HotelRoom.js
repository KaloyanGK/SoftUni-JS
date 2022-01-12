function hotelRoom(input) {


    let mesec = input[0];
    let noshtuvki = Number(input[1]);
    let studioPrice = 0;
    let apartPrice = 0;

    if (noshtuvki <= 7) {
        switch (mesec) {
            case `May`:
                studioPrice = noshtuvki * 50;
                apartPrice = noshtuvki * 65;
                break;
            case `October`:
                studioPrice = noshtuvki * 50;
                apartPrice = noshtuvki * 65;
                break;
            case `June`:
                studioPrice = noshtuvki * 75.20;
                apartPrice = noshtuvki * 68.70;
                break;
            case `September`:
                studioPrice = noshtuvki * 75.20;
                apartPrice = noshtuvki * 68.70;
                break;
            case `July`:
                studioPrice = noshtuvki * 76;
                apartPrice = noshtuvki * 77;
                break;
            case `August`:
                studioPrice = noshtuvki * 76;
                apartPrice = noshtuvki * 77;
                break;
        }
    } else if (7 < noshtuvki && noshtuvki <= 14) {
        switch (mesec) {
            case `May`:
                studioPrice = (noshtuvki * 50) * 0.95;
                apartPrice = noshtuvki * 65;
                break;
            case `October`:
                studioPrice = (noshtuvki * 50) * 0.95;
                apartPrice = noshtuvki * 65;
                break;
            case `June`: studioPrice = noshtuvki * 75.20;
                apartPrice = noshtuvki * 68.70;
                break;
            case `July`: studioPrice = noshtuvki * 76;
                apartPrice = noshtuvki * 77;
                break;
            case `August`: studioPrice = noshtuvki * 76;
                apartPrice = noshtuvki * 77;
                break;
        }
    } else if (noshtuvki > 14) {
        switch (mesec) {
            case `May`:
                studioPrice = (noshtuvki * 50) * 0.70;
                apartPrice = (noshtuvki * 65) * 0.90;
                break;
            case `October`:
                studioPrice = (noshtuvki * 50) * 0.70;
                apartPrice = (noshtuvki * 65) * 0.90;
                break;
            case `June`:
                studioPrice = (noshtuvki * 75.20) * 0.80;
                apartPrice = (noshtuvki * 68.70) * 0.90;
                break;
            case `September`:
                studioPrice = (noshtuvki * 75.20) * 0.80;
                apartPrice = (noshtuvki * 68.70) * 0.90;
                break;
            case `July`:
                studioPrice = noshtuvki * 76;
                apartPrice = (noshtuvki * 77) * 0.90;
                break;
            case `August`:
                studioPrice = noshtuvki * 76;
                apartPrice = (noshtuvki * 77) * 0.90;
                break;
        }
    }
    console.log(`Apartment: ${apartPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)

} hotelRoom(["May",
    "15"])





