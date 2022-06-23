class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (model == `` || horsepower < 0 || Number.isInteger(horsepower) == false < 0 || price < 0 || mileage < 0) {
            throw new Error(`Invalid input!`)


        }
        this.availableCars.push({ model, horsepower, price, mileage })
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`


    }
    sellCar(model, desiredMileage) {
        let carForSale = this.availableCars.find(e => e.model == model);

        if (carForSale == undefined) {
            throw new Error(`${carForSale} was not found!"`)
        }
        let price = 0;
        let diffInMileage = Math.abs(desiredMileage - carForSale.mileage)
        if (carForSale.mileage <= desiredMileage) {
            price = carForSale.price;
        }
        else if (diffInMileage <= 40000) {
            price = carForSale.price * 0.95;
        } else {
            price = carForSale.price * 0.90;

        }
        this.availableCars.slice(this.availableCars.indexOf(carForSale), 1);
        this.soldCars.push({ model, 'horsepower': carForSale.horsepower, soldPrice: price.toFixed(2) });
        this.totalIncome += this.availableCars.price;
        return `${model} was sold for ${price.toFixed(2)}$`
    }
    currentCar() {
        if (!this.availableCars) {
            return `There are no available cars`
        } else {
            let result = []
            result.push(`-Available cars:`)
            this.availableCars.forEach(el => {
                result.push(`---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(2)} km - ${el.price.toFixed(2)}$`)
            })
            return result.join(`\n`)
        }

    }
    salesReport(criteria) {
        if (criteria == horsepower) {

        } else if (criteria == model) {

        }else{
            throw new Error(`Invalid criteria!`)
        }
    }
}





let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar());





