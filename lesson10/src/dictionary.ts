interface DictionaryItem<T> {
    key: string | number;
    value: T;
}

class Dictionary<T> {
    private items: DictionaryItem<T>[] = [];
    set(key: string | number, value: T): void {
        const existingItem = this.items.find(item => item.key === key);

        if (existingItem) {
            existingItem.value = value;
        } else {
            this.items.push({ key, value });
        }
    }
    get(key: string | number): T {
        const item = this.items.find(item => item.key === key);

        if (item) {
            return item.value;
        } else {
            throw new Error(`Key not found: ${key}`);
        }
    }
    has(key: string | number): boolean {
        return this.items.some(item => item.key === key);
    }
}

const stringDictionary = new Dictionary<string>();

stringDictionary.set('one', 'One');
stringDictionary.set('two', 'Two'); 
console.log(stringDictionary.get('two')); 
console.log(stringDictionary.has('four')); 