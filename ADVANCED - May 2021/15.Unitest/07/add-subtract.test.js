let { expect } = require(`chai`);
let createCalculator = require(`./add-subtract`);

describe(`Calculator`, () => {
    let instance = {};
    beforeEach(() => {
        instance = createCalculator();
    });
    it(`has all methods`, () => {
        expect(instance).to.has.ownProperty(`add`);
        expect(instance).to.has.ownProperty(`subtract`);
        expect(instance).to.has.ownProperty(`get`);
    });
    it(`empty value`, () => {
        expect(instance.get()).to.equal(0)
    })
    it(`add single numbers`, () => {
        instance.add(1);
        expect(instance.get()).to.equal(1)
    });
    it(`add multy numbers`, () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3)
    });
    it(`subtract single number`, () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    });
    it(`subtract multy number`, () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    });
    it(`subtract and add number`, () => {
        instance.subtract(1);
        instance.add(2);
        expect(instance.get()).to.equal(1);
    });
    it(`works with numbers as string`, () => {
        instance.add(`1`);
        instance.add(`1`);
        instance.subtract(`2`);
        expect(instance.get()).to.equal(0);
    });

})