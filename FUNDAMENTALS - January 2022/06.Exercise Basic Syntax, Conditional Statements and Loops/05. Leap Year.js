function demo(year) {

    if (year % 4 === 0 && year % 100 !== 0 || year % 400 == 0) {
        console.log(`yes`);
    } else {
        console.log(`no`);
    }

} demo(1984)
demo(2003)
demo(4)
