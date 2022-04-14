function solve(object) {
    let newCar = {};

    let engine = {};
    let carriage = {};
    let wheels = [1, 2, 3, 4];

    newCar.model = object.model;


    if (object.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (object.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;

    } else if (object.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;


    }

    carriage.type = object.carriage
    carriage.color = object.color;

    if (object.wheelsize % 2 == 0) {
        object.wheelsize -= 1;
    }
    newCar.engine = engine;
    newCar.carriage = carriage;
    wheels.fill(object.wheelsize, 0);
    newCar.wheels = wheels;
    return newCar;
}
solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})