function solve(input, sorting) {
    let arr = [];
    let sorted = []
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for (let el of input) {
        let [city, ticketPrice, currStatus] = el.split(`|`);
        ticketPrice = Number(ticketPrice);
        let currentDestination = new Ticket(city, ticketPrice, currStatus);
        arr.push(currentDestination)
    }
    if (sorting == `destination`) {
        sorted = arr.sort((a, b) => {
            return a.destination.localeCompare(b.destination)
        })
    } else if (sorting == `status`) {
        sorted = arr.sort((a, b) => {
            return a.status.localeCompare(b.status)
        })
    } else if (sorting == `price`) {
        sorted = arr.sort((a, b) => {
            return a.price - b.price
        })
    }
    return sorted;
}
solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
)