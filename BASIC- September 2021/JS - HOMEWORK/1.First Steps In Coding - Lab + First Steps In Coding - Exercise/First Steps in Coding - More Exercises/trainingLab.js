function trainingLab(input) {

    let width = Number(input[0])
    let height = Number(input[1])

    let widthInSm = width * 100;
    let heightInSm = height * 100;

    let coridorH = 100;

    let buroH = 70;
    let buroW = 120;

    let freeH = heightInSm - coridorH;

    let buroCountH = Math.floor(freeH / buroH);
    let buroCountW = Math.floor(widthInSm / buroW);

    let totalburo = (buroCountH * buroCountW) - 3;


    console.log(totalburo)

}
trainingLab([`15`, `8.9`])