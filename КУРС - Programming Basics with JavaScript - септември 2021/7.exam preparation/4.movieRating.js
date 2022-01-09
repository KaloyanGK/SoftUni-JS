function ratings(input) {

    let num = Number(input[0]);
    let outputMax = "";
    let outputMin = "";
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;

    for (let i = 1; i < input.length; i++) {
        let movieName = input[i++];
        let movieRatings = Number(input[i]);
        sum += movieRatings;
        if (movieRatings > max) {
            max = movieRatings;
            outputMax = movieName;
        } else if (movieRatings < min) {
            min = movieRatings;
            outputMin = movieName;
        }
    }
    let avgRating = sum / num;
    console.log(`${outputMax} is with highest rating: ${max.toFixed(1)}`);
    console.log(`${outputMin} is with lowest rating: ${min.toFixed(1)}`);
    console.log(`Average rating: ${avgRating.toFixed(1)}`);

} ratings([`3`, `Interstellar`, `8.5`, `Dangal`, `8.3`, `Green Book`, `8.2`])