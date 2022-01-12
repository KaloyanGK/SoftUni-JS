function nestedLoopsDemo() {

    let points = 0;
    for (let row = 1; row <= 3; row++) {
        for (let col = 1; col <= 5; col++) {
            if (row === 1 && col === 4) {
                continue;
            } else if (row === 2 && col === 2) {
                continue;
            } else if (row === 3 && col === 3) {
                continue;
            } else if (row === 2 && col === 5) {
                points += 20
            } else if (row === 3 && col === 1) {
                points += 20
            } else if (row === 1 && col === 3) {
                break;
            } else {
                points++
            }
        }
    }
    console.log(points);
} nestedLoopsDemo()




