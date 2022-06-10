
// //Call and Apply
function introduce(name, age) {
    console.log(`hello ${name}. My name is ${this.name} and i am ${age} years old`);
}
introduce(`Ivan`, 31)

let object = {
    name: `Kaloyan`,
}

//introduce.call(object, `Georgi`, 55)
// introduce.apply(object, [`Ivan`, 31])

//Bind

let objectTwo = {

    name: `Stamat`,
}

let result = introduce.bind(objectTwo,);

result(`Grisha`, 40)


