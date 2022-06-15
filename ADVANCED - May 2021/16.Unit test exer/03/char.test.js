let lookupChar = require(`./char`);
let { expect } = require(`chai`);

describe(`lookupChar`, () => {
    it(`return correct char at givenn index`, () => {
        expect(lookupChar(`twelve`, 1)).to.be.equal(`w`)
    });
    it(`return correct char at givenn index`, () => {
        expect(lookupChar(`T`, 0)).to.be.equal(`T`)
    });
    it(`test with empty string`, () => {
        expect(lookupChar(``, 0)).to.be.equal(`Incorrect index`)
    });

    it(`give incorrect string`, () => {
        expect(lookupChar(12, 12)).to.be.undefined;
    });
    it(`give incorrect number`, () => {
        expect(lookupChar(`twelve`, 1.5)).to.be.undefined;
    });
    it(`give incorrect inputs`, () => {
        expect(lookupChar(12, `twelve`)).to.be.undefined;
    });
    it(`index is bigger then string length`, () => {
        expect(lookupChar(`twelve`, 10)).to.be.equal(`Incorrect index`)
    });
    it(`index is negative number`, () => {
        expect(lookupChar(`twelve`, -1)).to.be.equal(`Incorrect index`)
    })
});