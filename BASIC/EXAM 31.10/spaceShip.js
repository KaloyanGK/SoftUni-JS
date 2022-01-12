function spaceShip(input) {

    let shirina = Number(input[0])
    let duljina = Number(input[1]);
    let visochina = Number(input[2]);
    let srednaVisochina = Number(input[3]);

    let rocketSpace = shirina * duljina * visochina;
    let roomSpace = (srednaVisochina + 0.40) * 2 * 2;

    let people = Math.floor(rocketSpace / roomSpace);
    if (people >= 3 && people <= 10) {
        console.log(`The spacecraft holds ${people} astronauts.`);
    } else if (people < 3) {
        console.log(`The spacecraft is too small.`);
    } else if (people > 10) {
        console.log(`The spacecraft is too big.`);
    }


} spaceShip(["4.5",
    "4.8",
    "5",
    "1.75"])

