function isString(value: any): boolean {
  return typeof value === "string";
}

const str:string = "Hi";
const num:number = 4;
const numStr:string = "4"

console.log(str, isString(str));
console.log(num, isString(num));
console.log(numStr, isString(numStr));

