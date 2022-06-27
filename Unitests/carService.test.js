
let { carService } = require(`./carService.js`)
let { expect } = require(`chai`);




describe("Tests carService", function () {
    describe("isItExpensive function", function () {
        it("input is Engine or Transmission", function () {
            expect(carService.isItExpensive(`Engine`)).to.equal(`The issue with the car is more severe and it will cost more money`)
            expect(carService.isItExpensive(`Transmission`)).to.equal(`The issue with the car is more severe and it will cost more money`)
        });
        it("input is other then Engine or Transmission", function () {
            expect(carService.isItExpensive(`other`)).to.equal(`The overall price will be a bit cheaper`)
            expect(carService.isItExpensive(``)).to.equal(`The overall price will be a bit cheaper`)
        });
    });
    describe("discount function", function () {
        it("invalid inputs", function () {
            expect(() => carService.discount(`num`, 1)).to.throw(`Invalid input`)
            expect(() => carService.discount(1, `num`)).to.throw(`Invalid input`)
            expect(() => carService.discount(`num`, `num`)).to.throw(`Invalid input`)
            expect(() => carService.discount(`1`, `2`)).to.throw(`Invalid input`)
            expect(() => carService.discount()).to.throw(`Invalid input`)
        });
        it("If the numberOfParts is smaller or equal to 2", function () {
            expect(carService.discount(1, 1)).to.equal(`You cannot apply a discount`)
            expect(carService.discount(2, 1)).to.equal(`You cannot apply a discount`)
            expect(carService.discount(0, 1)).to.equal(`You cannot apply a discount`)
            expect(carService.discount(-1, 1)).to.equal(`You cannot apply a discount`)

        });
        it("15% when numberOfParts is higher than 2 and smaller or equal to 7", function () {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`)
            expect(carService.discount(6, 100)).to.equal(`Discount applied! You saved 15$`)
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`)


        });
        it("30% when numberOfParts is higher than 7", function () {
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`)
            expect(carService.discount(10, 100)).to.equal(`Discount applied! You saved 30$`)

        });

    });
    describe("partsToBuy  function", function () {
        it("invalid inputs", function () {
            expect(() => carService.partsToBuy(`string`, [])).to.throw(`Invalid input`)
            expect(() => carService.partsToBuy([], `string`)).to.throw(`Invalid input`)
            expect(() => carService.partsToBuy([], 1)).to.throw(`Invalid input`)
            expect(() => carService.partsToBuy(1, [])).to.throw(`Invalid input`)
            expect(() => carService.partsToBuy(1, 1)).to.throw(`Invalid input`)
            expect(() => carService.partsToBuy(`string`, `string`)).to.throw(`Invalid input`)

        });
        it("If partsCatalog is empty, return 0", function () {
            expect(carService.partsToBuy([], [`a`, `b`])).to.equal(0)
        });
        it("return parts price", function () {
            expect(carService.partsToBuy([{ part: `a`, price: 5 }, { part: `b`, price: 1 }], [`a`, `b`])).to.equal(6)
            expect(carService.partsToBuy([{ part: `a`, price: 5 }, { part: `b`, price: 1 }, { part: `c`, price: 10 }], [`b`, `c`])).to.equal(11)
        });


    });


});
