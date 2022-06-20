class Laptop {
  constructor(info, quality) {
    this.info = {
      producer: info.producer,
      age: info.age,
      brand: info.brand,
    };

    this.quality = quality;

    this.isOn = false;

    this.turnOn = function () {
      this.quality--;
      // this.price = Number(800 - this.info.age * 2 + (this.quality * 0.5));
      this.isOn = true;
    };

    this.turnOff = function () {
      this.quality--;
      // this.price = Number(800 - this.info.age * 2 + (this.quality * 0.5));
      this.isOn = false;
    };

    this.showInfo = () => {
      return JSON.stringify(this.info);
    };
  }

  get price() {
    return 800 - this.info.age * 2 + this.quality * 0.5;
  }
}

laptop = new Laptop();