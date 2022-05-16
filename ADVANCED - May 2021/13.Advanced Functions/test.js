function solution() {
    let string = ``;
    return {
        append,
        removeStart,
        removeEnd,
        print,
    };
    function append(word) {
        string += word;
    }

    function removeStart(n) {
        string = string.substring(3);
    }
    function removeEnd(n) {
        string = string.slice(0, -4);
    }
    function print() {
        console.log(string);
    }
}
let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

