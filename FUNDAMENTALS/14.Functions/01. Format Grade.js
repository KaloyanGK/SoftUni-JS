function formatGrade(number) {
    if (number < 3.00) {
        console.log(`Fail (2)`);
    } else if (number < 3.5) {
        console.log(`Poor (${number.toFixed(2)})`);
    } else if (number < 4.5) {
        console.log(`Good (${number.toFixed(2)})`);
    } else if (number < 5.5) {
        console.log(`Very good (${number.toFixed(2)})`);
    } else {
        console.log(`Excelent (${number.toFixed(2)})`);
    }

}

formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)


// •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"
