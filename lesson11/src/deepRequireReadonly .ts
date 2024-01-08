type DeepReadonlyRequire = {
    name?:string,
    age?:number, 
    isAdmin?:boolean, 
    work: {
        companyName?:string, 
        dateFound?:number
    }
}

type CustomReadonlyRequire <T> = {
    readonly [K in keyof T]-?: T[K] extends object ? CustomReadonlyRequire<T[K]> : T[K];
}

type UpdateReadonlyRequire = CustomReadonlyRequire<DeepReadonlyRequire>

const person:UpdateReadonlyRequire = {
    name:"Maria",
    age:25,
    isAdmin:false, 
    work: {
        companyName:"Apple", 
        dateFound:1999
    }
}

