const { expect } = require(`chai`);
const mathEnforcer = require(`./mathEnforcer`)



describe(`mathEnforcer test`, () => {
    describe(`addFive function tests`, () => {
        it(`input is not a number`, () => {
            expect(mathEnforcer.addFive(`string`)).to.be.undefined;
        });
        it(`input is a positive integer`, () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it(`input is a negative integer`, () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it(`input is a decimal number`, () => {
            expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5);
        });
    });
    describe(`subtractTen function tests`, () => {
        it(`input is not a number`, () => {
            expect(mathEnforcer.subtractTen(`string`)).to.be.undefined;
        });
        it(`input is a positive number`, () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        it(`input is a negative number`, () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
        it(`input is a decimal number`, () => {
            expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
        });
    });
    describe(`sum function tests`, () => {
        it(`first input is not a number`, () => {
            expect(mathEnforcer.sum(`string`, 12)).to.be.undefined;
        });
        it(`second input is not a number`, () => {
            expect(mathEnforcer.sum(12, `string`)).to.be.undefined;
        });
        it(`both inputs are not numbers`, () => {
            expect(mathEnforcer.sum(`string`, `string`)).to.be.undefined;
        });
        it(`both inputs are  numbers`, () => {
            expect(mathEnforcer.sum(12, 12)).to.be.equal(24)
        });
        it(`input is a decimal number`, () => {
            expect(mathEnforcer.sum(1.1, 1.1)).to.be.equal(2.2)
        })
    });
});
