

const object = {
    name: `Kaloyan`,
    lastName: `Karagyozov`,
    age: 31,
    sayHi: function () {
        console.log(`${this.name} said hello!`);
    }

}
object.sayHi()

const newObject = {
    name: `Ivan`,
}

const func = object.sayHi;

newObject[`func`] = func; //<--- или   newObject.func = func;
console.log(newObject);
newObject.func()


//test
let name = `Ivan`;
let age = 30;

let person = { name, age };
console.log(person);
// ----------------