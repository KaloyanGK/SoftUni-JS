function solve(params) {
    // let first = Number(params.shift());
    // let last = Number(params.pop());
    // let result = first + last;
    // console.log(result);
    let first = Number(params[0]);
    let last = Number(params[params.length - 1]);
    console.log(first + last);

}
solve(['20', '30', '40'])