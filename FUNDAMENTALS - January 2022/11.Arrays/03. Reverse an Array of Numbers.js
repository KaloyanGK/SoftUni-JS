function reverseArr(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    let output = ``;
    for (let i = newArr.length - 1; i >= 0; i--) {
        output += newArr[i] + ` `;
    }

    console.log(output);

} 
reverseArr(3, [10, 20, 30, 40, 50])
reverseArr(4, [-1, 20, 99, 5])
reverseArr(2, [66, 43, 75, 89, 47])