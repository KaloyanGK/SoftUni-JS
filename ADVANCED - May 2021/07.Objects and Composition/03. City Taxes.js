function cityTaxes(cityName, cityPopulation, cityTreasury) {

    let object = {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            percent /= 100;
            this.population *= percent + 1;
        },
        applyRecession(percent) {
            percent /= 100;
            this.treasury *= 1 - percent;
        }
    };
    return object;
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);

