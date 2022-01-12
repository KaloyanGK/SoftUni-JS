function demo(input) {
    let index = 0;
    let butilki = Number(input[index])
    index++;
    let command = input[index];
    let totalMl = 0;
    let counter = 0;
    let dishes = 0;
    let pots = 0;
    let nalichenPreparat = butilki * 750;
    let diff = 0;
    while (command !== `End`) {
        let count = Number(command);
        counter++;
        if (counter % 3 !== 0) {
            totalMl += count * 5;
            dishes += count;
        } else if (counter % 3 === 0) {
            totalMl += count * 15;
            pots += count;
            counter = 0;
        }
        index++;
        command = input[index];
        diff = Math.abs(nalichenPreparat - totalMl)
        if (nalichenPreparat < totalMl) {
            console.log(`Not enough detergent, ${diff} ml. more necessary!`);
            return;
        }
    }
  if (command === "End") {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${diff} ml.`);
    }

} demo
    ([`2`, `53`, `65`, `55`, `End`]);


    // ([`1`, `10`, `15`, `10`, `12`, `13`, `30`]);


