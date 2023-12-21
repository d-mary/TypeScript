
const value : number | string = "ok"
const value2 :number | string = 3


function getOperation (value:number|string) :number |string{
    if(typeof value === "string") {
    return value.toUpperCase()
    } else {
        return Math.pow(value, 3)
    }
}
sconsole.log(getOperation(value));
console.log(getOperation(value2));