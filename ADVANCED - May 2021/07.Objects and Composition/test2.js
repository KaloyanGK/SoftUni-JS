const object = {
    person: `Kaloyan`,
    age: 31,
    wave() {
        console.log(`${this.person} wave at the hoes`);
    }
}


let func = object.wave;


const newObject = {
    person: `Ivan`,
    age: 15,

}
newObject.wave=func;
newObject.wave()