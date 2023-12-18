interface IFigure {
    readonly name: string;
    readonly color: string;
    calculateArea(): number;
}

interface IPrintFormula {
    print() :void;
}

abstract class Figure implements IFigure {
    constructor (
         public readonly name:string,
         public readonly color:string,
    ) {}
     public abstract calculateArea() :number;
}

class Circle extends Figure   {
    readonly name: string;
    readonly color: string;
    private readonly radius: number;
    constructor(name: string, color: string, radius: number) {
        super(name, color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Figure {
    readonly name: string;
    readonly color: string;
    private readonly sideA: number;
    private readonly sideB: number;

    constructor(name:string, color: string, sideA: number, sideB: number, ) {
        super(name, color);
        this.sideA = sideA;
        this.sideB = sideB;
    }
    
    calculateArea(): number {
        return this.sideA * this.sideB;
    }
}
class Square extends Figure implements IPrintFormula {
    readonly name: string = "square";
    readonly color: string;
    private readonly side: number;

    constructor( name:string, color: string,side: number ) {
        super(name, color)
        this.side = side;
    }

    public calculateArea(): number {
        return this.side * this.side;
    }

    public print(): void {
        console.log(`Area formula of ${this.name} = side * side`);
    }
}

class Triangle extends Figure implements  IPrintFormula {
    readonly name: string = "triangle";
    readonly color: string;
    private readonly base: number;
    private readonly height: number;

    constructor(name:string, color: string, base: number, height:number  ) {
        super(name, color)
        this.base = base;
        this.height = height;    
    }
    public calculateArea(): number {
        return (this.base * this.height) / 2;
    }

    public print(): void {
        console.log(`Area formula of ${this.name} = base * height`);
    }
}

const mySquare = new Square("mySquare", "blue", 20)
mySquare.print()

const myCircle = new Circle("myCircle","red",10)
console.log(myCircle.calculateArea());
