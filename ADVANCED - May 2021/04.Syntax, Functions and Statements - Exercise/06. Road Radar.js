function solve(speed, area) {
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;
    let diff = 0;
    let status = ``;
    if (area === `motorway`) {
        if (speed <= 130) {
            console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
        } else {
            diff = speed - motorwayLimit;
            if (diff <= 20) {
                status = `speeding`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`
                );
            } else if (diff > 20 && diff <= 40) {
                status = `excessive speeding`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`
                );
            } else {
                status = `reckless driving`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`
                );
            }
        }
    } else if (area === `interstate`) {
        if (speed <= 90) {
            console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
        } else {
            diff = speed - interstateLimit;
            if (diff <= 20) {
                status = `speeding`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`
                );
            } else if (diff > 20 && diff <= 40) {
                status = `excessive speeding`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`
                );
            } else {
                status = `reckless driving`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`
                );
            }
        }
    } else if (area === `city`) {
        if (speed <= 50) {
            console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
        } else {
            diff = speed - cityLimit;
            if (diff <= 20) {
                status = `speeding`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`
                );
            } else if (diff > 20 && diff <= 40) {
                status = `excessive speeding`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`
                );
            } else {
                status = `reckless driving`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`
                );
            }
        }
    } else if (area === `residential`) {
        if (speed <= 20) {
            console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
        } else {
            diff = speed - residentialLimit;
            if (diff <= 20) {
                status = `speeding`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`
                );
            } else if (diff > 20 && diff <= 40) {
                status = `excessive speeding`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`
                );
            } else {
                status = `reckless driving`;
                console.log(
                    `The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`
                );
            }
        }
    }
}
solve(40, "city");
solve(21, "residential");
solve(120, "interstate");
solve(200, "motorway");
