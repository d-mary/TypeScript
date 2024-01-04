function filterArray<T>(array: T[], condition: (element: T) => boolean): T[] {
    return array.filter(element => condition(element));
}

const numbers = [1, 2, 3, 4, 5];


const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers); 
