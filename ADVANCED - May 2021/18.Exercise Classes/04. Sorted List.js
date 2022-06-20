
class List {
    constructor() {
        this.array = [];
        this.size = this.array.length;

    }
    add(number) {
        this.array.push(number);
        this.size = this.array.length;
        this.array.sort((a, b) => a - b)
    }
    remove(index) {
        if (index >= this.array.length || index < 0) {
            throw new Error(`Index is not valid!`)
        } else {
            this.array.splice(index, 1);
            this.size = this.array.length

        }
    }
    get(index) {
        return this.array[index];
    }
}



let list = new List();

list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
