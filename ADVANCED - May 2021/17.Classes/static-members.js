class Cat {
    isHungry = true;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name}: Meao!`);
    }
    static vetChck() {
        if (cat.isHungry) {
            console.log(`This cat has to eat!`);
        } else {
            console.log(`This cat is fine!`);

        }
    }
}
let cat = new Cat(`Koko`);
cat.makeSound()
Cat.vetChck(cat)
