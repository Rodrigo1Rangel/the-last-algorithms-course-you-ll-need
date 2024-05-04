export default function bubble_sort(arr: number[]): void {
    // the iteration goes from i to N-1, so you don't go off the array
    // but we also do not need to evaluate the last i items, as the greatests
    // get sorted to the last positions of the array after the swapping step
    // at each i iteration.

    // O(N)
    for (let i = 0; i < arr.length; ++i) {
        // O(N)
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            // O(1)
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
