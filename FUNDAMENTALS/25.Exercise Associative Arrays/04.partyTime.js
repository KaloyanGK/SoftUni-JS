function solve(input) {
    let guestList = {
        vip: [],
        regular: [],
    };
    let guest = input.shift();
    while (guest !== `PARTY`) {
        let firstChar = guest[0];
        if (isNaN(firstChar)) {
            guestList.regular.push(guest);
        } else {
            guestList.vip.push(guest);
        }
        guest = input.shift();  
    }

    for (let guest of input) {
        if (guestList.vip.includes(guest)) {
            let index = guestList.vip.indexOf(guest);
            guestList.vip.splice(index, 1)
        } else if (guestList.regular.includes(guest)) {
            let index = guestList.regular.indexOf(guest);
            guestList.regular.splice(index, 1)
        }
    }
    let vipCount = guestList.vip.length;
    let regularCount = guestList.regular.length;
    let totalCount = vipCount + regularCount;

    console.log(totalCount);
    console.log(guestList.vip.join(`\n`));
    console.log(guestList.regular.join(`\n`));

}
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
);
