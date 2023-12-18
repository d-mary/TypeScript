interface IUser {
    name: string;
    age:number;
    [key: string]: any;
}

const user: IUser = {
    name: "John",
    age: 25,
    city: "New York",
    yearBorn:1995, 
    animal:"cat"
};