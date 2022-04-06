function commonElements(arr1, arr2) {

    let arrOneLength = arr1.length;
    let arrTwoLength = arr2.length;

    for (let i = 0; i < arrOneLength; i++) {

        let first = arr1[i]

        for (let j = 0; j < arrTwoLength; j++) {

            let second = arr2[j];

            if (first === second) {
                console.log(first);
            }
        }

    }




} commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
