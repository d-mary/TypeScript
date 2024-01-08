type DeepReadonly = {
    name:string,
    age:number, 
    isAdmin:boolean, 
    work: {
        companyName:string, 
        dateFound:number
    }
}

type CustomReadonly <T> = {
    readonly [K in keyof T]: T[K] extends object ? CustomReadonly<T[K]> : T[K];
}

type UpdateReadonly = CustomReadonly<DeepReadonly>

const user:UpdateReadonly = {
    name:"Maria",
    age:25,
    isAdmin:false, 
    work: {
        companyName:"Apple", 
        dateFound:1999
    }
}

