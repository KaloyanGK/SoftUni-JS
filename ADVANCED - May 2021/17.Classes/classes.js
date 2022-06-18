class Human {
    constructor(name) {
        this.name = name;
    }
}

let firstHuman = new Human(`Adam`);
let secondHuman = new Human(`Eva`);
console.log(firstHuman);
console.log(secondHuman);



// console.log(humans[2].name)

//КАК ДОБАВЯМЕ МЕТОДИ
class Human {
    constructor(name) {
        this.name = name;
        
    }
    greeting() {
        console.log(`${this.name} says Hello`);
    }
}
let array = [`Kaloyan`, `Yoanna`, `Vladimir`];
let humans = array.map(el => new Human(el));
// humans.forEach(el => el.greeting());

