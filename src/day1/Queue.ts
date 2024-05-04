// generic over T. "Just pass us the value and we will handle it"
type Node<T> = {
    value: T;
    // we need to have an optional value for next? for the moment when we
    // want to stop forwarding, otherwise it would create infinite memory.
    next?: Node<T>; // it has no previous? because it is a single linked list.
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // to INSERT (== implement, add, push) it to the queue, we use the term ENQUEUE:
    enqueue(item: T): void {
        // we add from the tail side
        this.length++;
        if (this.length === 0) {
            console.log("do this operation");
        }
        if (!this.tail) {
            this.tail = this.head = { value: item } as Node<T>;
            // next is undefined
            return;
        }

        // adding a new tail to the list
        this.tail.next = { value: item } as Node<T>;
        // pointing the tail to the new item
        this.tail = { value: item } as Node<T>;
    }

    // to REMOVE from the queue, we mess with the head (first in, first out)
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--; // if we want the outside world to know about how
        // many items we have, we need to keep track of it.
        // here we reduce the length as we pop it.

        const head = this.head; // storing the head
        this.head = this.head.next; // update the header point to the next one

        head.next = undefined; // if we didn't have garbage collection

        return head.value;
    }

    // to GET A VALUE without changing the state of the queue
    peek(): T | undefined {
        return this.head?.value; // if the value exists, we return the value
        // if it does not, we return undefined.
    }
}
