function solve(string) {
  let health = 100;
  let bitcoin = 0;
  let rooms = string.split("|");

  for (let i = 0; i < rooms.length; i++) {
    let current = rooms[i];
    let splited = current.split(` `);
    let command = splited.shift();
    if (command == `potion`) {
      let upcomingHealth = Number(splited.shift());

      let currHealth = 100 - health;

      if (upcomingHealth + health >= 100) {
        health = 100;
        console.log(`You healed for ${currHealth} hp.`);
      } else {
        health = health + upcomingHealth;
        console.log(`You healed for ${upcomingHealth} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
    } else if (command == `chest`) {
      let currentBitcoin = Number(splited.shift());
      console.log(`You found ${currentBitcoin} bitcoins.`);
      bitcoin += currentBitcoin;
    } else {
      let monsterName = command;
      let monsterDmg = Number(splited.shift());
      health -= monsterDmg;
      if (health <= 0) {
        console.log(`You died! Killed by ${monsterName}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      } else {
        console.log(`You slayed ${monsterName}.`);
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoin}`);
  console.log(`Health: ${health}`);
}
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
