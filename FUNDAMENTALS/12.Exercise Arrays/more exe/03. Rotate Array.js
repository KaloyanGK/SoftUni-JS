
function solve(firstName, age, lastName) {

    let fName = firstName;

    function solvingName(fName) {

        let evenLetters = fName.length;

        let eveneLettters = '';

        for (let i = 0; i < evenLetters; i++) {

            let letter = fName[i];

            if (i % 2 === 0) {

                evenLetters += letter;
            }
        }
        console.log(evenLetters);
    }
    function solvingName(firstName)



    console.log(solvingName('Kristina'))



}
solve('Kristina', 26, 'Kirilova')



