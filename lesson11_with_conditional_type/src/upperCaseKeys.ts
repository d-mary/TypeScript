type UpperCaseKey = {
    name:string,
    age:number, 
    isAdmin:boolean, 
    work: {
        companyName:string, 
        dateFound:number
    }
}

type CustomUpperCaseKey<T> = {
    [K in keyof T as Uppercase<string & K>]: CustomUpperCaseKey<T[K]>;
};

type UpdateUpperCaseKey = CustomUpperCaseKey<UpperCaseKey>

const admin:UpdateUpperCaseKey = {
    NAME:"Maria",
    AGE:25,
    ISADMIN:true, 
    WORK: {
        COMPANYNAME:"Apple", 
        DATEFOUND:1999
    }
}
