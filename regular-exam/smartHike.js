class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        } else {
            return `${peak} has already been added to your goals`
        }

    }
    hike(peak, time, difficultyLevel) {
        let neededTime = time * 10;

        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.goals.hasOwnProperty(peak)) {

            if (this.resources == 0) {
                throw new Error(`You don't have enough resources to start the hike`)
            }

            if (this.resources < neededTime) {
                return `You don't have enough resources to complete the hike`
            } else {
                let diff = this.resources - neededTime;
                this.resources -= neededTime;
                this.listOfHikes.push({ peak, time, difficultyLevel });
                return `You hiked ${peak} peak for ${time} hours and you have ${diff}% resources left`
            }
        }
    }
    rest(time) {
        let restTime = time * 10;
        this.resources += restTime;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${restTime}% resources`
        }

    }
    showRecord(criteria) {
        let easyHikeRecord = Number.MIN_SAFE_INTEGER;
        let hardHikeRecord = Number.MAX_SAFE_INTEGER;

        let easyHikes = [];
        let hardHikes = [];


        for (let el of this.listOfHikes) {
            if (el.difficultyLevel == `easy`) {
                if (el.time < easyTime) {
                    easyHikeRecord = el.time;
                    easyHikes.push(el.peak)
                    easyHikes.push(el.time)
                }

            } else if (el.difficultyLevel == `hard`) {
                if (el.time < hardHikeRecord) {
                    hardHikeRecord = el.time;
                    hardHikes.push(el.peak)
                    hardHikes.push(el.time)
                }
            }
        }
        if (criteria == `easy`) {
            if (easyHikes.length <= 0) {
                return `${this.username} has not done any easy hiking yet`
            } else {
                return `${this.username}'s best easy hike is ${easyHikes[0]} peak, for ${easyHikes[1]} hours`
            }
        } else if (criteria == `hard`) {
            if (hardHikes.length <= 0) {
                return `${this.username} has not done any hard hiking yet`
            } else {
                return `${this.username}'s best hard hike is ${hardHikes[0]} peak, for ${hardHikes[1]} hours`

            }
        } else if (criteria == `all`) {
            if (this.listOfHikes.length == 0) {
                return `${this.username} has not done any hiking yet`

            }
            let result = [];
            result.push(`All hiking records: `);
            for (let el of this.listOfHikes) {
                result.push(`${this.username} hiked ${el.peak} for ${el.time} hours`)
            }
            return result.join(`\n`)

        }

    }


}

const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
console.log(user.showRecord('all'));

user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');


















