const { cinema } = require('./cinema.js');
const { expect } = require('chai');

describe('testing cinema object', () => {
    describe('testing showMovies func', () => {
        it('returns that message if arr is less than', () => {
            expect(cinema.showMovies([''])).to.equal('There are currently no movies to show.');

        });

        it('returns movies list if the arr length is more than 0', () => {
            expect(cinema.showMovies(['a', 'b', 'c'])).to.equal('a, b, c');
            expect(cinema.showMovies(['a'])).to.equal('a');

        })

    })

    describe('testing ticketPrice func', () => {
        it('Correct type', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);

        });
        it('incorrect type', () => {
            expect(() => cinema.ticketPrice('a')).to.throw()
        });
    })

    describe('testing swapSeatsInHall func', () => {
        it('incorrect input', () => {
            expect(cinema.swapSeatsInHall(1, `string`)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(`string`, 1)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(`string`, `string`)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(0, 1)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(1, 0)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(-1, 1)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(1, -1)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(1, 1)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(1, 21)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(21, 1)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(1.1, 1)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(1, 1.1)).to.equal(`Unsuccessful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(1, 1.1)).to.equal(`Unsuccessful change of seats in the hall.`)
        });
        it('correct input', () => {
            expect(cinema.swapSeatsInHall(19, 15)).to.equal(`Successful change of seats in the hall.`)
            expect(cinema.swapSeatsInHall(20, 1)).to.equal(`Successful change of seats in the hall.`)

        });

    })
})