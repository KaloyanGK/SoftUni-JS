function getFibonator() {
    let a = 0;
    let b = 1;

    return () => {
        let c = a + b;
        a = b;
        b = c;
        return a;
    }

}
//създаваме променливата, за да можем в конзол лога да изкарам резултата от getFibonator(), а ако логнем
//само функцията ще изкара всичко в нея?

let fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());




