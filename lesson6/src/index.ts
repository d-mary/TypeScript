interface IFigure {
    readonly name: string;
    readonly color: string;
    calculateArea(): number;
    print?() :void;
}


class Circle implements IFigure {
    readonly name: string = "circle";
    readonly color: string;
    private readonly radius: number;

    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle implements IFigure {
    readonly name: string = "rectangle";
    readonly color: string;
    private readonly width: number;
    private readonly height: number;

    constructor(width: number, height: number, color: string) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}
class Square implements IFigure {
    readonly name: string = "square";
    readonly color: string;
    private readonly side: number;

    constructor(side: number, color: string) {
        this.side = side;
        this.color = color;
    }

    public calculateArea(): number {
        return this.side * this.side;
    }
    public print(): void {
        console.log(`Area formula of ${this.name} = side * side`);
    }
}

class Triangle implements IFigure {
    readonly name: string = "triangle";
    readonly color: string;
    private readonly base: number;
    private readonly height: number;

    constructor(base: number, height:number, color: string) {
        this.base = base;
        this.height = height;
        this.color = color;
    }
    public calculateArea(): number {
        return (this.base * this.height) / 2;
    }

    public print(): void {
        console.log(`Area formula of ${this.name} = base * height`);
    }
}

const mySquare = new Square(20, "blue")
mySquare.print()

const myCircle = new Circle(10,"red")
console.log(myCircle.calculateArea());

