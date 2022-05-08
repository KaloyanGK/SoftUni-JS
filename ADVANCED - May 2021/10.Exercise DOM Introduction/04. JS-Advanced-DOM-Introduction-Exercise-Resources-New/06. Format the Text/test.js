function solve() {

    let object = {
        name: `Ivan`,
        age: 30,
    }
    let newObject = Object.assign({}, object);
    newObject[`gender`] = `male`;
    let copiedPerson = JSON.parse(JSON.stringify(object));
    copiedPerson.location = `Varna`;
    console.log(object);
    console.log(newObject);
    console.log(copiedPerson);

}
solve()