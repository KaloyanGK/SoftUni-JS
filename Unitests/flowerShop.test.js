const { flowerShop } = require(`./flowerShop.js`);
const { expect } = require(`chai`);

describe("Test", function () {
    describe("calcPriceOfFlowers", function () {
        it("return correct price", function () {
            expect(flowerShop.calcPriceOfFlowers(`a`, 1, 2)).to.equal(`You need $2.00 to buy a!`)
        });
        it("inncorect input", function () {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(`a`, `a`, 1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(`a`, 1, `a`)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(2, `a`, `a`)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(2, `a`, 2)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(`a`, `a`, `a`)).to.throw();
        });
    });
    describe("checkFlowersAvailable", function () {
        it("flower is available", function () {
            expect(flowerShop.checkFlowersAvailable(`a`, [`a`, `b`, `c`])).to.equal(`The a are available!`)
        });
        it("flower is not available", function () {
            expect(flowerShop.checkFlowersAvailable(`a`, [`b`, `c`, `d`])).to.equal(`The a are sold! You need to purchase more!`)
        });


    });
    describe("sellFlowers", function () {
        it("invalid inputs", function () {
            expect(() => flowerShop.sellFlowers(`a`, 1)).to.throw()
            expect(() => flowerShop.sellFlowers([`a`, `b`, `c`], `a`)).to.throw()
            expect(() => flowerShop.sellFlowers([`a`, `b`, `c`], -1)).to.throw()
            expect(() => flowerShop.sellFlowers([`a`, `b`, `c`], 4)).to.throw()
            expect(() => flowerShop.sellFlowers([`a`, `b`, `c`], 3)).to.throw()
        });
        it("correct inputs", function () {
            expect(flowerShop.sellFlowers([`a`, `b`, `c`], 1)).to.equal(`a / c`)
            expect(flowerShop.sellFlowers([`a`, `b`, `c`, `d`], 0)).to.equal(`b / c / d`)

        });

    });

});
