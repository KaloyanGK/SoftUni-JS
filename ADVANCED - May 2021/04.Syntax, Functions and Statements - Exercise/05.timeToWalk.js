function solve(steps, footPrintLength, speed) {
    let distance = steps * footPrintLength;
    let breakMin = 0;
    while (distance > 500) {
        breakMin++;
        distance -= 500;
    }
   

}
solve(4000, 0.60, 5)