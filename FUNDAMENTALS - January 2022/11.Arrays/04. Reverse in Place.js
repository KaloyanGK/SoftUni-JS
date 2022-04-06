function reverse(arr) {

    let output = ``;
    for (let i = arr.length - 1; i >= 0; i--) {
        output += arr[i] + ` `
    }
    console.log(output);
}
reverse(['a', 'b', 'c', 'd', 'e']);
reverse(['abc', 'def', 'hig', 'klm', 'nop']);
reverse(['33', '123', '0', 'dd'])