function solve(params) {

    let company = {};

    for (let i = 0; i < params.length; i++) {
        let splited = params[i].split(` -> `);
        // let [companyName, currentNum] = params[i].split(` -> `);
        let companyName = splited[0];
        let currentNum = splited[1];

        if (!company.hasOwnProperty(companyName)) {
            company[companyName] = [];
        }
        if (!company[companyName].includes(currentNum)) {
            company[companyName].push(currentNum)
        }
    }
    let sorted = Object.keys(company)
    sorted.sort((a, b) => {
        return a.localeCompare(b)
    })
    for (let el of sorted) {
        console.log(el);
        for (let emplo of company[el]) {
            console.log(`-- ${emplo}`);
        }

    }


}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
