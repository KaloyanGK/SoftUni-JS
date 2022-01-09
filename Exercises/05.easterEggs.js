function demo(input) {

    let eggs = Number(input[0]);
    let orange = 0;
    let blue = 0;
    let green = 0;
    let red = 0;
    let maxEggs = Number.MIN_SAFE_INTEGER;
    let currentEggColor = ``;
    for (let i = 1; i <= eggs; i++) {
        let color = input[i];
        if (color === `red`) {
            red++
            if (red > maxEggs) {
                maxEggs = red;
                currentEggColor = color;
            }
        } else if (color === `orange`) {
            orange++;
            if (orange > maxEggs) {
                maxEggs = orange;
                currentEggColor = color;
            }
        } else if (color === `blue`) {
            blue++;
            if (blue > maxEggs) {
                maxEggs = blue;
                currentEggColor = color;
            }
        } else if (color === `green`) {
            green++;
            if (green > maxEggs) {
                maxEggs = green;
                currentEggColor = color;
            }
        }

    }
    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);
    console.log(`Max eggs: ${maxEggs} -> ${currentEggColor}`);
}

demo([`7`, `orange`, `blue`, `green`, `green`, `blue`, `red`, `green`])