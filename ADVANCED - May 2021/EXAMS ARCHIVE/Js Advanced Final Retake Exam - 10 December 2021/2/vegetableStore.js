class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.mainVegetable = {};
        this.availableProducts = [];

    }

    loadingVegetables(vegetables) {
        let outputStr = [];
        for (let vegetable of vegetables) {
            let [name, qty, price] = vegetable.split(' ');
            qty = Number(qty)
            price = Number(price)
            if (!this.mainVegetable.hasOwnProperty(name)) {
                this.mainVegetable[name] = {};
                this.mainVegetable[name][`quantity`] = qty;
                this.mainVegetable[name][`price`] = price;
                this.availableProducts.push(this.mainVegetable);
                outputStr.push(name);
            } else if (this.mainVegetable.hasOwnProperty(name) && this.mainVegetable[name]['price'] < price) {
                this.mainVegetable[name]['quantity'] += qty;
                this.mainVegetable[name]['price'] = price;
            } 
        }
        return `Successfully added ${outputStr.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let outputStr = [];
        let finalPrice = 0;
        for (let vegetable of selectedProducts) {
            let [name, quant] = vegetable.split(' ');
            quant = Number(quant);
            if (!this.mainVegetable.hasOwnProperty(name)) {
                throw new Error(`${name} is not available in the store, your current bill is ${finalPrice.toFixed(2)}.`);
            } else if (this.mainVegetable.hasOwnProperty(name) && this.mainVegetable[name]['quantity'] < quant) {
                throw new Error(`The quantity ${quant} for the vegetable ${name} is not available in the store, your current bill is ${finalPrice.toFixed(2)}.`);
            } else {
                let currPrice = this.mainVegetable[name]['price'];
                finalPrice += currPrice * quant;
                this.mainVegetable[name]['quantity'] -= quant;
                console.log(this.mainVegetable[name]['quantity']);
                return `Great choice! You must pay the following amount $${finalPrice.toFixed(2)}.`;
            }

        }

    }

}



let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.buyingVegetables(["Okra 1"]));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));
