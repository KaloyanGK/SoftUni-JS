class Sum {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

    }
    static calculation(n1, n2) {
        let sum1 = n1.a + n1.b + n1.c
        let sum2 = n2.a + n2.b + n2.c
        let totalSum = sum1 + sum2;
        return totalSum;

    }
}
let firstNumbers = new Sum(1, 1, 1);
let secondNumbers = new Sum(2, 2, 2);
console.log(Sum.calculation(firstNumbers, secondNumbers));

//добавяне на свойство с get

class Class {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2
    }
}
let item = new Class(2)
console.log(item.diameter);
item.radius = 5;
console.log(item.diameter);

