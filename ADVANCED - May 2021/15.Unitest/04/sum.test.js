const { expect } = require(`chai`);

const sum = require(`./sum`);



describe(`array of numbers`, () => {

    it(`dsadasd`, () => {
        expect(sum([1, 2, 3])).to.be.equal(6, `works with 1, 2, 3`)
    });
    it(`sum dasdasdasda be correct`, () => {
        expect(sum([4, 5, 6])).to.equal(15, `works with 4,5,6`)
    });
    it(`sum to be correct`, () => {
        expect(sum([0])).to.equal(0, `works with 0`)
    });

});

