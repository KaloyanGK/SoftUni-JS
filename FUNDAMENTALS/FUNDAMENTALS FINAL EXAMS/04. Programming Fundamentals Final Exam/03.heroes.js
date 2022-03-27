function solve(input) {
    let heroesCount = input.shift();
    let object = {};
    for (let i = 0; i < heroesCount; i++) {
        let currentHero = input[i].split(` `);
        let heroName = currentHero[0];
        let heroHP = Number(currentHero[1]);
        let heroMP = Number(currentHero[2]);
        if (!object.hasOwnProperty(heroName)) {
            object[heroName] = {
                hp: heroHP,
                mp: heroMP,
            };
        }
    }

    input.splice(0, heroesCount);

    for (let el of input) {
        el = el.split(` - `);
        let command = el[0];
        if (command === `CastSpell`) {
            let hero = el[1];
            let mana = Number(el[2]);
            let spell = el[3];
            if (object[hero].mp < mana) {
                console.log(`${hero} does not have enough MP to cast ${spell}!`);
            } else {
                object[hero].mp -= mana;
                console.log(
                    `${hero} has successfully cast ${spell} and now has ${object[hero].mp} MP!`
                );
            }
        } else if (command === `TakeDamage`) {
            let hero = el[1];
            let demage = Number(el[2]);
            let attacker = el[3];
            if (object.hasOwnProperty(hero)) {
                object[hero].hp -= demage;
                if (object[hero].hp > 0) {
                    console.log(
                        `${hero} was hit for ${demage} HP by ${attacker} and now has ${object[hero].hp} HP left!`
                    );
                } else {
                    console.log(`${hero} has been killed by ${attacker}!`);
                    delete object[hero];
                }
            }
        } else if (command === `Recharge`) {
            let hero = el[1];
            let mpRestored = Number(el[2]);
            let totalMP = object[hero].mp + mpRestored;
            if (totalMP > 200) {
                let diff = 200 - object[hero].mp;
                console.log(`${hero} recharged for ${diff} MP!`);
                object[hero].mp = 200;
            } else {
                console.log(`${hero} recharged for ${mpRestored} MP!`);
                object[hero].mp = totalMP
            }
        } else if (command === `Heal`) {
            let hero = el[1];
            let hpRestored = Number(el[2]);
            let totalHP = object[hero].hp + hpRestored;
            if (totalHP > 100) {
                let diff = 100 - object[hero].hp
                console.log(`${hero} healed for ${diff} HP!`);
                object[hero].hp = 100;
            } else {
                console.log(`${hero} healed for ${hpRestored} HP!`);
                object[hero].hp = totalHP;
            }
        }
    }
    for (let el in object) {
        console.log(`${el}`);
        console.log(`HP: ${object[el].hp}`);
        console.log(`MP: ${object[el].mp}`);
    }
}
solve([
    2,
    `Solmyr 85 120`,
    `Kyrre 99 50`,
    `Heal - Solmyr - 10`,
    `Recharge - Solmyr - 50`,
    `TakeDamage - Kyrre - 66 - Orc`,
    `CastSpell - Kyrre - 15 - ViewEarth`,
    `End`,
]);




    // ([4,
    //     `Adela 90 150`,
    //     `SirMullich 70 40`,
    //     `Ivor 1 111`,
    //     `Tyris 94 61`,
    //     `Heal - SirMullich - 50`,
    //     `Recharge - Adela - 100`,
    //     `CastSpell - Tyris - 1000 - Fireball`,
    //     `TakeDamage - Tyris - 99 - Fireball`,
    //     `TakeDamage - Ivor - 3 - Mosquito`,
    //     `End`])

