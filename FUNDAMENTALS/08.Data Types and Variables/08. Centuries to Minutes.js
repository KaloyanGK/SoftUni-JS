function calc(cent) {
    let years = cent * 100;
    let days = Math.floor(years * 365.2422)
    let hours = 24 * days;
    let minutes = 60 * hours;
    console.log(`${cent} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

} calc(1)
calc(5)
