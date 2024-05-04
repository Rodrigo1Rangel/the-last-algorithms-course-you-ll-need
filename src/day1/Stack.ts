type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        // equivalent to QUEUE
        const node = { value: item } as Node<T>;

        // in case there is no head yet
        if (!this.head) {
            this.head = node;
            return;
        }

        // if there is:
        node.prev = this.head; // new node gets pointed by the head
        this.head = node; // new item becomes the head
    }

    pop(): T | undefined {
        // equivalent to DEQUEUE
        // to guarantee that we will stay within a positive or 0 value
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            // we store the item that will be removed to later return it
            const head = this.head;
            this.head = undefined; // no item will be left in the list
            return head?.value;
        }

        const head = this.head as Node<T>; // storing the value
        this.head = head.prev; // readressing the new head
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
