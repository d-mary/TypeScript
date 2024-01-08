type ToPropertyDescription = {
    name: string,
    age:number
};

type CustomToPropertyDescriptor<T> = {
    [K in keyof T]: {
        value: T[K];
        writable: boolean;
        enumerable: boolean;
        configurable: boolean;
    };
};

type UpdateToPropertyDescriptor = CustomToPropertyDescriptor<ToPropertyDescription>;

const cat: UpdateToPropertyDescriptor = {
    name: {
        value: "Garfield",
        writable: true,
        enumerable: false,
        configurable: true,
    },
    age: {
        value: 5,
        writable: false,
        enumerable: true,
        configurable: true,
    },
};