//Какво е Prototype
//  начин на структуриране на обекти;
//  прототипа е обект свързан към друг обект;
//  всеки обект има свой прототип;
//  обекта може да взаймства стойности от прототипа;
//  имат различни референции, т.е не не ==/===
//  пазят се в heap

let person = {
    name: `Vladi`,
    age: 1,

}
let personPrototype = Object.getPrototypeOf(person);
personPrototype.eyes = `green`
console.log(personPrototype);
console.log(person.eyes);
