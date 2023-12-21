
function isFunction(value: any):boolean {
    return typeof value === 'function';
}

function processFunction(func: any): void {
    if (isFunction(func)) {
        func(); 
    } else {
        console.log("not a function.");
    }
}

const myFunction: () => void = () => {
    console.log("Hello from the function!");
};

const notF: string = "I'm not a function.";

processFunction(myFunction);  
processFunction(notF); 


