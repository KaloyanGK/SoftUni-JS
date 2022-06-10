function solve(input) {

    let arr = [];

    function add(str) {
        arr.push(str)
    }
    function remove(str) {
        return arr.filter(el => el !== str)
    }
    function print() {
        console.log(arr.join(`,`));
    }
    return {
        add,
        remove,
        print,
    }
    for (let el of input) {
        let [command, string] = el.split(` `);
    }


}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])