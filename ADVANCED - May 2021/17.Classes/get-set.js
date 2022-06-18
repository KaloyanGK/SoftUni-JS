class Circle {
    constructor(radius) {
        this.radius = radius;
        this.p
    }
    get diameter() {
        return this.radius * 2
    }
    set diameter(param) {
        this.p = param / 2;
    }
}

let c = new Circle(5);
console.log(c.diameter);
c.diameter = 50;
console.log(c.radius);
console.log(c.p);
console.log(c);
