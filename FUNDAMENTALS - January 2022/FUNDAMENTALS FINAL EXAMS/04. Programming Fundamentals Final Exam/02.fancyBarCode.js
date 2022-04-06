function solve(input) {
    let pattern = /([@][#]+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])([@][#]+)/;

    input.shift();
    for (let el of input) {
        let code = ``;
        match = pattern.exec(el);
        if (match) {
            for (let el of match.groups.barcode) {
                if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {
                    code += el;
                }
            }
            if (code == ``) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${code}`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
