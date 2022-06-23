
class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (model != `` && horsepower >= 0 && price >= 0 && mileage >= 0) {
            this.availableCars.push({
                model,
                horsepower,
                price,
                mileage
            })
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`

        } else {
            throw new Error(`Invalid input!`)
        }
    }
    sellCar(model, desiredMileage) {
        let car = this.availableCars.find(e => e.model == model);
        let diffInPrice = car.mileage - desiredMileage;

        if (car == undefined) {
            throw new Error(`${car} was not found!"`)
        }
        if (car.mileage <= desiredMileage) {

        }
        if (diffInPrice <= 40000) {
            car.price = car.price - (car.price * 5 / 100);
        }
        if (diffInPrice > 40000) {
            car.price = car.price - (car.price * 10 / 100);

        }
        this.availableCars.slice(this.availableCars.indexOf(car), 1);
        this.soldCars.push({ model, horsepower, price });
        return `${model} was sold for ${price}$`
    }
}






let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

