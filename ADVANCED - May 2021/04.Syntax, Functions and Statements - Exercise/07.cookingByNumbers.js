function solve(p0, p1, p2, p3, p4, p5) {

    let number = Number(p0);
    let array = [p1, p2, p3, p4, p5];
    for (let el of array) {
        if (el == `chop`) {
            number /= 2;
            console.log(number);
        } else if (el == `dice`) {
            number = Math.sqrt(number);
            console.log(number);
        } else if (el == `spice`) {
            number += 1;
            console.log(number);
        } else if (el == `bake`) {
            number *= 3;
            console.log(number);
        } else if (el == `fillet`) {
            let percent = (number * 20) / 100;
            number -= percent;
            console.log(number);
        }
    }
   

}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')