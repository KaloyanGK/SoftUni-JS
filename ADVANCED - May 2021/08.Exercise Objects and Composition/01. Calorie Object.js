function solve(params) {
    let object = {};
    for (let i = 0; i < params.length; i += 2) {
        let item = params[i];
        let count = Number(params[i + 1]);
        object[item] = count;

    }
    console.log(object);

}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
// console.log(`---`);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])