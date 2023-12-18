interface IBase {
    [key: string]: any;
}
interface IExtended extends IBase {
    age: number;
    isAdmin: boolean;
    name:string
}

const myUser: IExtended = {
    name: "John",
    age: 42,
    isAdmin: true,
};