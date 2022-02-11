function solve(arr1, arr2) {
    
    let isEqual = true;
    let sum = 0;
    for (let index = 0; index < arr1.length; index++) {

        let firstElement = Number(arr1[index]);
        let secondElement = Number(arr2[index]);
        sum += firstElement;
        if (firstElement !== secondElement) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            isEqual = false;
            break;
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }


}
solve(['10', '20', '30'], ['10', '20', '30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
solve(['1'], ['10']);
