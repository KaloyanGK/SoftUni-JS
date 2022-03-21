function solve(arr) {
    let result = {};

    for (let el of arr) {
        let splited = el.split(` `);
        let name = splited[0];
        let number = splited[1];


        result[name] = number;

        // console.log(result);

    }


    for (let name in result) {
        console.log(`${name} -> ${result[name]}`);
    }
}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)