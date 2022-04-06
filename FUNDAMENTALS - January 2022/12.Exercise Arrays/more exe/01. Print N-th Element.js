function solve(arr) {
    let steps = Number(arr[arr.length - 1]);
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i += steps) {
        newArr.push(arr[i]);
    }
    console.log(newArr.join(` `));

                        // ВАРИАНТ 2

                       
                        //     let lastNum = arr.pop();
                        //     let resultArr = [];
                        //     for (let index in arr) {
                        //         if (index % lastNum === 0) {
                        //             resultArr.push(arr[index]);
                        //         }
                        //     }
                        //     console.log(resultArr.join(' '));
                        // }

} solve(['1', '2', '3', '4', '5', '6']);