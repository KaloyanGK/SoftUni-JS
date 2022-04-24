function solve(input) {
    let result = [];

    for (let el of input) {
        let [name, level, items] = el.split(` / `);
        level = Number(level);

        if (items === undefined) {
            items = [];
            result.push({ name, level, items });
        } else {
            items = items.split(`, `);
            result.push({ name, level, items });
        }
    }
    console.log(JSON.stringify(result));
}
solve([
    "Isacc / 25 /",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
