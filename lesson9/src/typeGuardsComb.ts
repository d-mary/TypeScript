interface MyObject {
    [key: string]: any;
}

function hasProperty(obj: MyObject):boolean {
    for (const prop in obj) {
        return true;
    }
    return false;
}

function getPropType(obj: MyObject, prop: string):string |undefined  {
   return typeof obj[prop];
}

function processObject(obj: MyObject, prop:string): any {
   if (hasProperty(obj)) {
        if (obj[prop] !== undefined) {
            console.log("ok");
            return { prop: obj[prop], type: getPropType(obj, prop) };
        } else {
            return "err: Property not found";
        }
    } else {
        return "err: Object has no properties";
    }

}

const myObject: MyObject = {
    name: "John",
    age: 30,
    hasDiscount: true,
};
console.log(processObject(myObject, "name"));



