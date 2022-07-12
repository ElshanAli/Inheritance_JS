class Vehicle {

    constructor(brand) {

        this.brand = brand;


    }

}

class Car extends Vehicle {

    constructor(brand, model, speed) {

        super(brand)
        this.model = model;
        this.speed = speed;

    }

    GetFullInfo() {
        console.log(`Car Brand: ${this.brand}  Car Model: ${this.model}  Car Speed: ${this.speed}`);
    }

}

let car_info = new Car("Kia", "Stinger", 280)

car_info.GetFullInfo();