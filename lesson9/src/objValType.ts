interface IUser {
    [key: string]: any;
}

function getPropetry(obj: IUser, key: string) {
    if (key in obj) {
        return { value: obj[key], type: typeof obj[key] };
    } else {
        throw new Error(`Property "${key}" not found`);
    }
}


const user: IUser = {
    name:"John", 
    surname:"Adams", 
    age:30, 
    hasDiscount:false
};




try {
    console.log(getPropetry(user, "age"));
    console.log(getPropetry(user, "fff")); 
} catch (error) {
    console.error(error.message);
}


