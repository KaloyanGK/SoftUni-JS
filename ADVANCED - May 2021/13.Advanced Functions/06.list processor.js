function solve(input) {

    let arr = [];
    let obj = {
        add: (array, string) => {
            return array.push(string);

        },
        remove: (array, string) => {
            while (array.includes(string)) {
                let index = array.indexOf(string);
                array.splice(index, 1);
            }
        },
        print: (array) => {
            console.log(array.join(`,`));
            return array;

        }
    }

    return input.forEach(el => {
        let [command, string] = el.split(` `);
        if (command == 'add') {
            obj[command](arr, string)
        } else if (command == `remove`) {
            obj[command](arr, string)
        } else {
            obj[command](arr)
        }

    })



}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])