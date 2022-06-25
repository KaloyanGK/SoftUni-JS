const { numberOperations } = require(`./number`);
const { expect } = require(`chai`);


describe("Tests", function () {
    describe("powNumber function", function () {
        it("return correct answer", function () {
            expect(numberOperations.powNumber(5)).to.equal(25)
            expect(numberOperations.powNumber(-2)).to.equal(4)
            expect(numberOperations.powNumber(0)).to.equal(0)
        });

    });
    describe("numberChecker function", function () {
        it("incorrect input", function () {
            expect(() => numberOperations.numberChecker(`string`)).to.throw()
            expect(() => numberOperations.numberChecker()).to.throw()
        });
        it("correct input with number lower then 100", function () {
            expect(numberOperations.numberChecker(`1`)).to.equal(`The number is lower than 100!`)
            expect(numberOperations.numberChecker(1)).to.equal(`The number is lower than 100!`)
            expect(numberOperations.numberChecker(0)).to.equal(`The number is lower than 100!`)
            expect(numberOperations.numberChecker(99)).to.equal(`The number is lower than 100!`)
        });
        it("correct input with number bigger or even to 100", function () {
            expect(numberOperations.numberChecker(`100`)).to.equal(`The number is greater or equal to 100!`)
            expect(numberOperations.numberChecker(100)).to.equal(`The number is greater or equal to 100!`)
            expect(numberOperations.numberChecker(101)).to.equal(`The number is greater or equal to 100!`)
        });

    });
    describe("sumArrays function", function () {
        it("correct input", function () {
            expect(numberOperations.sumArrays([1, 1, 1], [1, 1, 1])).to.deep.equal([2, 2, 2])
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2])).to.deep.equal([2, 4, 3])
        });


    });

});
