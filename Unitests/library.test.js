const { library } = require(`./library`);
const { expect } = require(`chai`);

describe("Tests", function () {
    describe("calcPriceOfBook", function () {
        it("inncorect inputs", function () {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw();
            expect(() => library.calcPriceOfBook(`string`, `string`)).to.throw();
            expect(() => library.calcPriceOfBook(1, `string`)).to.throw();
        });
        it("correct inputs", function () {
            expect(library.calcPriceOfBook(`book`, 1981)).to.equal(`Price of book is 20.00`);
            expect(library.calcPriceOfBook(`book`, 1980)).to.equal(`Price of book is 10.00`);
            expect(library.calcPriceOfBook(`book`, 1965)).to.equal(`Price of book is 10.00`);
        });
    });

    describe('findBook', () => {
        it('return throw if arr length is less or equal to 0', () => {
            expect(() => library.findBook([], `a`)).to.throw();

        });

        it('returns We found the book you want if the book is in arr', () => {
            expect(library.findBook(['a', 'b', 'c'], `a`)).to.equal('We found the book you want.');
        });

        it('returns The book you are looking for is not here! if the book is not in arr', () => {
            expect(library.findBook(['a', 'b', 'c'], `e`)).to.equal('The book you are looking for is not here!');
        });
    })

    describe('arrangeTheBooks', () => {
        it('returns throw if params is not integer number', () => {
            expect(() => library.arrangeTheBooks('5')).to.throw();
            expect(() => library.arrangeTheBooks(-1)).to.throw();
            expect(() => library.arrangeTheBooks(1.1)).to.throw();

        });

        it('not integer or less then 0', () => {
            expect(() => library.arrangeTheBooks(1.1)).to.throw()
            expect(() => library.arrangeTheBooks(-1)).to.throw()
        });
        it('not integer or less then 0', () => {
            expect(library.arrangeTheBooks(30)).to.equal(`Great job, the books are arranged.`)
            expect(library.arrangeTheBooks(40)).to.equal(`Great job, the books are arranged.`)
        });
        it('Insufficient space, more shelves need to be purchased.', () => {
            expect(library.arrangeTheBooks(50)).to.equal(`Insufficient space, more shelves need to be purchased.`)
        });


    })

});
