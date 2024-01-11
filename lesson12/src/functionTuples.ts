type FunctionTuples<T> = T extends (arg: infer ParamType) => infer ReturnType ? 
[ParamType, ReturnType] : never;

function exampleFunc(param: number): string {
    return `Param is ${param}`;
}

const result: FunctionTuples<typeof exampleFunc> = [77, 'Hello']; 

const errorResult: FunctionTuples<typeof exampleFunc> = ["Hello", 77]; 
