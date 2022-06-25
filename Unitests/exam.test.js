const { име на функцията } = require(`./exam`);
const { expect } = require(`chai`);




describe("Tests", function () {
    describe("име на функцията", function () {
        it("условие", function () {
            expect(numberOperations.powNumber(5)).to.equal(25)
            expect(numberOperations.powNumber(-2)).to.equal(4)
            expect(numberOperations.powNumber(0)).to.equal(0)
        });

    });