let object = {
    firstName: `Gosho`,
    lastName: `Goshev`,
    sayHi() {
        let nestedFunc = ()=> {
            return this.firstName + ` ` + this.lastName;

        }
        console.log(`${nestedFunc()} said hello`);
    }
}
object.sayHi()
