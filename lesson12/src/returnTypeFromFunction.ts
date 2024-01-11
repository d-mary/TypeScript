type ReturnTypeFromFunction<T> = T extends (...params: any[]) => infer U ? U : any;


function foo(param: number): string {
    return `Param is: ${param}`;

}

const res: ReturnTypeFromFunction<typeof foo> = 'Hello'; 
const resErr:ReturnTypeFromFunction<typeof foo> = true;