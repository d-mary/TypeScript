interface IPrice {
    [key: string]: number | string;
}

function arePricesValid(obj: IPrice): boolean {
    const values = Object.values(obj);
    for (const value of values) {
        if (typeof value !== 'number') {
            return false;
        }
    }
    return true;
}

const prices: IPrice = {
    tables: 50,
    computers: 200,
    chairs: "sale 50%",
    books: 10,
};


const result: boolean = arePricesValid(prices);
