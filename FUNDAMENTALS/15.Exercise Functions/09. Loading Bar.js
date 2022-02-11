function loadingBar(number) {
    let num = number;
    let percent = '%'.repeat(num / 10);
    let dots = '.'.repeat(10 - num / 10);
    if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${percent}]`);
    } else {
        console.log(`${num}% [${percent}${dots}]`);
        console.log(`Still loading...`);
    }
} loadingBar(30)