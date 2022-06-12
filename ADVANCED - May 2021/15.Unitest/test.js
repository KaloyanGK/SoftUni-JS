
const { expect } = require(`chai`);

const sum = require(`./index`).sum
///test Mocha - стартираме с "npx mocha" в TERMINAL
describe(`Test of sum function`, () => {
    it(`works with positive integers`, () => {
        expect(sum(3, 5)).to.equal(8, `did not work with 3 and 5`);

    })
    it(`works with floating point number`, () => {
        expect(sum(3.14, 2.71)).to.equal(5.85, `did not work with 3 and 5`);

    })

});