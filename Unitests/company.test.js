const { companyAdministration } = require(`./company`);
const { expect } = require(`chai`);



describe("Tests …", function () {
    describe("hiringEmployee", function () {
        it("check pisition!=Programmer", function () {
            expect(() => companyAdministration.hiringEmployee(`a`, `a`, 1)).to.throw();
            expect(() => companyAdministration.hiringEmployee(`a`, `a`, 3)).to.throw();
        });
        it("successfully hired ", function () {
            expect(companyAdministration.hiringEmployee(`a`, `Programmer`, 4)).to.equal(`a was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee(`a`, `Programmer`, 3)).to.equal(`a was successfully hired for the position Programmer.`);
        });
        it("not approved", function () {
            expect(companyAdministration.hiringEmployee(`a`, `Programmer`, 1)).to.equal(`a is not approved for this position.`);
        });
    });
    describe("calculateSalary", function () {
        it("calculate salary", function () {
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });
        it("incorect input", function () {
            expect(() => companyAdministration.calculateSalary(`string`)).to.throw()
            expect(() => companyAdministration.calculateSalary(-1)).to.throw()
        });

    });
    describe("firedEmployee", function () {
        it("incorect inputs", function () {
            expect(() => companyAdministration.firedEmployee([`a`, `b`, `c`], `string`)).to.throw()
            expect(() => companyAdministration.firedEmployee(`string`, 1)).to.throw()
            expect(() => companyAdministration.firedEmployee([`a`, `b`, `c`], -1)).to.throw()
            expect(() => companyAdministration.firedEmployee([`a`, `b`, `c`], 3)).to.throw()
        });
        it("corect inputs", function () {
            expect(companyAdministration.firedEmployee([`a`, `b`, `c`], 1)).to.equal(`a, c`)
       
        });


    });

});

