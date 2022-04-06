function reading(pages, pagePerHour, daysForReading) {
    let timeToRead = pages / pagePerHour;
    let requiredHoursPerday = timeToRead / daysForReading;
    console.log(requiredHoursPerday);


} reading(212, 20, 2)
reading(432, 15, 4)