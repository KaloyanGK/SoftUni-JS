function solve(input) {
    let pattern = /([=]|[\/])([A-Z][A-Za-z]{2,})\1/g;
    let array = [];
    let match
    while (match = pattern.exec(input)) {
        array.push(match)
    }
    let secondArray = [];
    let points = 0;
    for (let el of array) {
        secondArray.push(el[2])
        points += el[2].length
    }
    console.log(`Destinations: ${secondArray.join(`, `)}`);
    console.log(`Travel Points: ${points}`);

}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
solve("ThisIs some InvalidInput")

