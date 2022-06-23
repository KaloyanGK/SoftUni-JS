function Person(name, age, heigth) {
    this.name = name;
    this.age = age;
    this.heigth = heigth;
    // this.greed = () => {
    //     console.log(`${this.name} says hello!`);
    // }
}
//по-този начин създаваме една референция за тази функция(намира се на 1 място в паметта), която се използва от висчки "new Person"
//така е правилния начин да се създаде метод в един клас
Person.prototype.greet = function () {
    console.log(`${this.name} says hello!`);
}

let person = new Person(`Vladi`, 1, 60);
let person2 = new Person(`Yoanna`, 27, 169);
person.greet()
person2.greet()