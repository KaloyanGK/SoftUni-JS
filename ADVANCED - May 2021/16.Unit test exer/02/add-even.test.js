let isOddOrEven = require(`./add-even`);
let { expect } = require(`chai`);

describe(`isOddOrEven`, () => {

    it(`check type - with number`, () => {
        expect(isOddOrEven(12)).to.be.undefined;
    });
    it(`check type - with boolean`, () => {
        expect(isOddOrEven(true)).to.be.undefined;
    });
    it(`check length - to be even`, () => {
        expect(isOddOrEven(`hi`)).to.equal(`even`);
    });
    it(`check length - to be odd`, () => {
        expect(isOddOrEven(`hello`)).to.equal(`odd`);
    });
});