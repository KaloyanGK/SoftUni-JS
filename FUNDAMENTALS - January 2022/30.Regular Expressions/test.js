function solve(input) {
    let obj = {
        name: `Kaloyan`,
        sister: {
            name: `Desislava`,
            age: 36,
        }
    }
    console.log(obj[`sister`].name);
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")