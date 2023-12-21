
const arr:any[] = ["hello", 4, "world", true,undefined, "6", 65, "hi", "ok", 100, "no" ]

function filterStrings (arr:any[]) :string[]{
    const arrStr = arr.filter((el)=> typeof el ==="string")
    return arrStr
}

console.log(filterStrings(arr));