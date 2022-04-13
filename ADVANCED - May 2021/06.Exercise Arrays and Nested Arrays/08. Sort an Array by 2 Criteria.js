function solve(params) {

    let sorted = params.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    });
    console.log(sorted.join(`\n`));
}
solve(['test',
    'Deny',
    'omen',
    'Default']
)
