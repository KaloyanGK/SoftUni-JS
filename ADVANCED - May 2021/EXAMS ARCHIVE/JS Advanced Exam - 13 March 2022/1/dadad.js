function ara() {


    let array = [1, 0, 1, 1, 5]

    let result = array.reduce((a, b) => {
        return a + b;
    }, 0)
    console.log(result);
}
ara()