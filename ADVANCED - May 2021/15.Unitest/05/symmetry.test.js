let isSymmetric = require(`./symmetry`);
let { expect } = require(`chai`);

describe(`test`, () => {
    it(`check is symmetric - return true`, () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it(`check is symmetric - return false`, () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it(`check is symmetric - return false`, () => {
        expect(isSymmetric(5)).to.be.false;
    });
    it(`check is symmetric with odd length array - return true`, () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it(`check is symmetric for type mismatched elements - return false`, () => {
        expect(isSymmetric([1, 2, `1`])).to.be.false;
    });
})