function login(input) {
    let index = 0;
    let username = input[index];
    index++;

    let correctPassword = username.split("").reverse().join("");


    let currentPassword = input[index];

    let counter = 0;
    while (currentPassword !== correctPassword) {
        counter++;
        if (counter > 3) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);
        index++;
        currentPassword = input[index];
    }
    if (currentPassword === correctPassword) {
        console.log(`User ${username} logged in.`);
    }

}
login(['Acer', 'login', 'go', 'let me in', 'recA'])
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
login(['momo', 'omom'])