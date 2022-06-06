function createRect(a, b) {
    function getWidth() {
        return a;
    }
    function getHeigth() {
        return b;
    }
    function getArea() {
        return a * b
    }
    return {
        getWidth,
        getHeigth,
        getArea,
    }

};
const myRect = createRect(5, 3);
console.log(myRect.getWidth());
console.log(myRect.getHeigth());
console.log(myRect.getArea());
