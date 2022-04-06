function solve(text) {
    let pattern = /\b(?<day>)\d{2}([-.\/])(?<month>)[A-z][a-z]{2}\2(?<year>)\d{4}\b/g

    let result = text.match(pattern);
    console.log(result);
}
solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016")