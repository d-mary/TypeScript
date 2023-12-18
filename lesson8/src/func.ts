interface IFunc {
   [key: string]: (...rest:any[])=>any   
}

let objF :IFunc = {
    fun:(x:number, y:number) => x+y,
}