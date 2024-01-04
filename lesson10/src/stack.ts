class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }


    pop(): T | undefined {
        return this.items.pop();
    }


    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

const numberStack = new Stack<number>();

numberStack.push(1);
numberStack.push(2);
const poppedNumber = numberStack.pop();


const stringStack = new Stack<string>();

stringStack.push("one");
stringStack.push("two");

console.log(stringStack.peek()); 
