function solve(arr, number) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += number) {
        let currentNum = arr[i];
        newArr.push(currentNum)
    }
    return newArr;
}
solve(['dsa',
    'asd',
    'test',
    'tset'],
    2


)