const { bookSelection } = require(`./book.js`);
const { expect } = require(`chai`);

describe("Tests …", function () {
    describe("isGenderSuitable", function () {
        it("book is suitable", function () {
            expect(bookSelection.isGenreSuitable(`Thriller`, 16)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable(`Horror`, 16)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable(`HowHigh`, 11)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable(`HowHigh`, 16)).to.equal(`Those books are suitable`);
        });
        it("inapproriate age", function () {
            expect(bookSelection.isGenreSuitable(`Thriller`, 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
            expect(bookSelection.isGenreSuitable(`Horror`, 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        });

        it("inapproriate age - edge case", function () {
            expect(bookSelection.isGenreSuitable(`Thriller`, 12)).to.equal(
                `Books with Thriller genre are not suitable for kids at 12 age`
            );
            expect(bookSelection.isGenreSuitable(`Horror`, 12)).to.equal(
                `Books with Horror genre are not suitable for kids at 12 age`
            );
        });
    });
    describe("isItAffordable", function () {
        it("can afford book + edge case", function () {
            expect(bookSelection.isItAffordable(1, 1)).to.equal(`Book bought. You have 0$ left`);
            expect(bookSelection.isItAffordable(1, 2)).to.equal(`Book bought. You have 1$ left`);
        });

        it("not enough money", function () {
            expect(bookSelection.isItAffordable(2, 1)).to.equal(`You don't have enough money`);
        });
        it("invalid input", function () {
            expect(() => bookSelection.isItAffordable(`string`, 1)).to.throw();
            expect(() => bookSelection.isItAffordable(1, `string`)).to.throw();
            expect(() => bookSelection.isItAffordable(`string`, `string`)).to.throw();
        });
    });

    describe("suitableTitles", function () {
        it("TODO …", function () {
            expect(() => bookSelection.suitableTitles([], 2)).to.throw(`Invalid input`);
        });
        it("TODO …", function () {
            expect(() => bookSelection.suitableTitles(2, `string`)).to.throw(`Invalid input`);
        });
        it("TODO …", function () {
            expect(
                bookSelection.suitableTitles([{
                    title: `aa`,
                    genre: `a`,
                },], `a`)).to.deep.equal([`aa`]);
        });
        it("TODO …", function () {
            expect(
                bookSelection.suitableTitles(
                    [
                        {
                            title: `ba`,
                            genre: `a`,
                        },
                    ],
                    `a`
                )
            ).to.deep.equal([`ba`]);
        });
    });
});
