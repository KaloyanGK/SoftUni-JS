function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let lenght = Number(input[index]);
    index++;

    let cakeSize = width * lenght;

    let command = input[index];
    index++;
    let isHavePieces = true;

    while (command !== `STOP`) {
        let pieces = Number(command);


        cakeSize -= pieces;
        if (cakeSize <= 0) {
            isHavePieces = false;
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (isHavePieces) {
        console.log(`${Math.abs(cakeSize)} pieces are left.`);
    }

} cake(["10", "2", "2", "4", "6", "STOP"]);