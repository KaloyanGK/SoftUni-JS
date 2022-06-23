
//Object.freeze - обекта не може да бъде модифициран
let person = {
    name: `Vladimir`,
    age: 1,
    gendr: `male`,
}
Object.freeze(person);
person.mother = `Yoanna`;
console.log(person);

//Object.assign - копираме обект
// 1 начин 
// let newPerson1 = JSON.parse(JSON.stringify(person));
// newPerson1.grandFather = `Georgi`
// console.log(newPerson1);

//2 начин
let newPerson2 = Object.assign({}, person);
newPerson2.father = `Kaloyan`
console.log(newPerson2);


//Object.seal - позволява да промени стойности на обект, но не и да добавим нови или да трием

Object.seal(newPerson2);
console.log(Object.getOwnPropertyDescriptors(newPerson2));




