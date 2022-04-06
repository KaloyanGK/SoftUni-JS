function solve(arr) {
    let meetings = {};

    for (let el of arr) {

        let tokens = el.split(` `);
        let day = tokens[0];
        let name = tokens[1];
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let el in meetings) {
        console.log(`${el} -> ${meetings[el]}`);
    }

}
solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
