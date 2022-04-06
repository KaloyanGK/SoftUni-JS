function demo(input) {

    let loads = Number(input[0]);
    let totalCargo = 0;
    let bus = 0;
    let truck = 0;
    let train = 0;

    for (let i = 1; i <= loads; i++) {
        let cargo = Number(input[i]);
    
        totalCargo += cargo;
        if (cargo <= 3) {
            bus += cargo;
        } else if (cargo >= 4 && cargo <= 11) {
            truck += cargo;
        } else if (cargo > 11) {
            train += cargo;
        }
    }
    let avarageCargo = (bus * 200 + truck * 175 + train * 120) / totalCargo;
    let busPercent = bus / totalCargo * 100;
    let truckPercent = truck / totalCargo * 100;
    let trainPercent = train / totalCargo * 100;

    console.log(`${avarageCargo.toFixed(2)}`);
    console.log(`${busPercent.toFixed(2)}%`);
    console.log(`${truckPercent.toFixed(2)}%`);
    console.log(`${trainPercent.toFixed(2)}%`);


} demo([`5`, `2`, `10`, `20`, `1`, `7`])