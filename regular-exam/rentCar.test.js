const { rentCar } = require(`./rentCar.js`);
const { expect } = require(`chai`);


describe("Tests …", function () {
    describe("searchCar Function", () => {
        it("there is matching model", () => {
            expect(rentCar.searchCar([`a`, `b`, `c`], `a`)).to.equal(`There is 1 car of model a in the catalog!`);
        });
        it("inncorect inputs", () => {
            expect(() => rentCar.searchCar(`a`, `a`)).to.throw();
            expect(() => rentCar.searchCar([`a`, `b`, `c`], 1)).to.throw();
            expect(() => rentCar.searchCar(1, 1)).to.throw();
            expect(() => rentCar.searchCar([], `a`)).to.throw();

        });
        it("missing model", () => {
            expect(() => rentCar.searchCar([`a`, `b`, `c`], `d`)).to.throw();
        });
    });
    describe("calculatePriceOfCar Function", () => {
        it("inncorect inputs", () => {
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw();
            expect(() => rentCar.calculatePriceOfCar(`model`, `model`)).to.throw();
            expect(() => rentCar.calculatePriceOfCar(1, `model`)).to.throw();
            expect(() => rentCar.calculatePriceOfCar([], `model`)).to.throw();
        });
        it("no matchhing model", () => {
            expect(() => rentCar.calculatePriceOfCar(`string`, 1)).to.throw;
        })
        it("there is matching model", () => {
            expect(rentCar.calculatePriceOfCar(`BMW`, 1)).to.equal(`You choose BMW and it will cost $45!`)
        })

    });
    describe("checkBudget Function", () => {
        it("inncorect inputs", () => {
            expect(() => rentCar.checkBudget(`a`, 1, 2)).to.throw()
            expect(() => rentCar.checkBudget(1, `a`, 2)).to.throw()
            expect(() => rentCar.checkBudget(1, 1, `a`)).to.throw()
        });
        it("can rent a car", () => {
            expect(rentCar.checkBudget(1, 1, 4)).to.equal(`You rent a car!`)
            expect(rentCar.checkBudget(1, 2, 2)).to.equal(`You rent a car!`)
        });
        it("need bigger budget", () => {
            expect(rentCar.checkBudget(1, 5, 4)).to.equal(`You need a bigger budget!`)
        });


    })

});
