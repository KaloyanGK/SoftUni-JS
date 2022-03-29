function solve(input) {
    let flowerscount = Number(input.shift());
    let object = {};
    for (let i = 0; i < flowerscount; i++) {
        let line = input[i].split(`<->`);
        let flower = line[0];
        let rearity = Number(line[1])

        object[flower] = {
            rear: rearity,
            rating: [],
        }
    }

    input.splice(0, flowerscount);
    let element = input.shift();

    while (element !== `Exhibition`) {
        let [command, plantInfo] = element.split(`: `)
        console.log(command);

        element = input.shift();
    }

}
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
