function employees(arr) {

    for (el of arr) {
        let emplName = el;
        let emplNum = el.length;
        let person = {};
        person.name = emplName;
        person.num = emplNum;
        console.log(`Name: ${person.name} -- Personal Number: ${person.num}`);
    }



}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
