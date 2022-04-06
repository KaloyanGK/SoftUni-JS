function fishTank(input){

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentageReserve = Number(input[3]);

    let tankVolume = lenght * width * height;

    let tankVolumeInDM = tankVolume * 0.001;

    let total = tankVolumeInDM - (tankVolumeInDM * (percentageReserve / 100));

    console.log(total);
}

fishTank(["105", "77 ", "89 ", "18.5 "]);
