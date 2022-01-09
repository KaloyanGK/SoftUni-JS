function demo(input) {
    let capacity = Number(input[0]);
    let fans = Number(input[1]);
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;
    let avarageCapacity = (fans / capacity * 100).toFixed(2);

    for (let i = 1; i <= fans; i++) {
        let sector = input[i + 1];
        if (sector === `A`) {
            sectorA++;
        } else if (sector === `B`) {
            sectorB++;
        }
        else if (sector === `V`) {
            sectorV++
        } else if (sector === `G`) {
            sectorG++;
        }
    }
    let percentSectorA = (sectorA / fans * 100).toFixed(2);
    let percentSectorB = (sectorB / fans * 100).toFixed(2);
    let percentSectorV = (sectorV / fans * 100).toFixed(2);
    let percentSectorG = (sectorG / fans * 100).toFixed(2);

    console.log(`${percentSectorA}%`);
    console.log(`${percentSectorB}%`);
    console.log(`${percentSectorV}%`);
    console.log(`${percentSectorG}%`);
    console.log(`${avarageCapacity}%`);


} demo([
    `1000`
    , `12`
    , `A`
    , `V`
    , `V`
    , `A`
    , `G`
    , `A`
    , `A`
    , `A`
    , `V`
    , `G`
    , `V`
    , `A`])

