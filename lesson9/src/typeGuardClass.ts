class Vehicle {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    move(): void {
        console.log(`Moving at a speed of ${this.speed}`);
    }
}

class Car extends Vehicle {
    brand: string;

    constructor(speed: number, brand: string) {
        super(speed);
        this.brand = brand;
    }

    drive(): void {
        console.log(`Driving the ${this.brand}`);
    }
}

class Bicycle extends Vehicle {
    type: string;

    constructor(speed: number, type: string) {
        super(speed);
        this.type = type;
    }

    goOnBicycle(): void {
        console.log(`Go on the ${this.type} bicycle`);
    }
}

function isCar(obj: any): obj is Car {
    return obj instanceof Car;
}

function isBicycle(obj: any): obj is Bicycle {
    return obj instanceof Bicycle;
}

function moveVehicle(vehicle: Vehicle): void {
    console.log("Moving vehicle...");
    vehicle.move();

    if (isCar(vehicle)) {
        console.log("It's a car!");
        vehicle.drive();
    } else if (isBicycle(vehicle)) {
        console.log("It's a bicycle!");
        vehicle.goOnBicycle();
    } else {
        console.log("Unknown vehicle type");
    }
}

const myCar = new Car(50, "Mazda");
const myBicycle = new Bicycle(15, "Ukraine");

moveVehicle(myCar);
moveVehicle(myBicycle);
