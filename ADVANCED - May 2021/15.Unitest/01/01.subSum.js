function cardFactory(params, first, last) {

    if (!Array.isArray(params)) {
        return NaN;
    }

    if (first < 0) {
        first = 0;
    }
    //let first = Math.max(first,0) - за да вземе по-голямото;
    //замества горния if


    if (last > params.length) {
        last = params.length - 1;
    }
    //let last = Math.min(last,params.length-1)-за да вземем евентуално последния индекс.
    //замества горния if


    let sliced = params.slice(first, last + 1);
    let sum = sliced.reduce((acc, num) => acc + Number(num), 0);
    return sum;

}
cardFactory([10, 20, 30, 40, 50, 60], 1, 3)