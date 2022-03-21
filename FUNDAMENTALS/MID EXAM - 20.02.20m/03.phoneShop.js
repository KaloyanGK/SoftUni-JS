function solve(arr) {

    let phoneList = arr.shift().split(`, `)

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let splited = current.split(` - `);
        let command = splited.shift()
        if (command == `Add`) {
            let currPhone = splited.shift();
            if (!phoneList.includes(currPhone)) {
                phoneList.push(currPhone)
            }

        } else if (command == `Remove`) {
            let currPhone = splited.shift();
            if (phoneList.includes(currPhone)) {
                let index = phoneList.indexOf(currPhone)
                phoneList.splice(index, 1)

            }
        } else if (command == `Bonus phone`) {
            let phone = splited.shift().split(`:`)
            let oldPhone = phone[0];
            let newPhone = phone[1];
            if (phoneList.includes(oldPhone)) {
                let index = phoneList.indexOf(oldPhone);
                phoneList.splice(index + 1, 0, newPhone)
            }
        } else if (command == `Last`) {
            let currPhone = splited.shift();
            if (phoneList.includes(currPhone)) {
                let index = phoneList.indexOf(currPhone)
                phoneList.splice(index, 1);
                phoneList.push(currPhone);
            }
        } else if (command == `End`) {
            console.log(phoneList.join(`, `));
            break;
        }
    }

}
solve([`SamsungA50, MotorolaG5, IphoneSE`, `Add - Iphone10`, `Remove - IphoneSE`, `End`])