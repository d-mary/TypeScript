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
    [K in keyof T & string as Uppercase<string & K>]: T[K] extends object ? CustomUpperCaseKey<T[K]> : T[K];
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
