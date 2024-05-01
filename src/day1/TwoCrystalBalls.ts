export default function two_crystal_balls(breaks: boolean[]): number {
    // Assuming that the array is big enough to have a sqrt root:
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            // We quit the loop when the ball breaks
            break;
        }
    }

    i -= jmpAmount; // We go back one jmpAmount unit, from where the ball
    // would not break. Then we start walking forward

    for (let j = 0; j <= jmpAmount && i < breaks.length; ++j, ++i) {
        // j was created to make sure that the distance that we will walk
        // will not surpress the jmpAmount, because otherwise there would be
        // a problem in the previous for loop.
        if (breaks[i]) {
            return i; // we are walking one index at a time to the point when
            // i will be the distance that we are looking for.
        }
    }

    return -1; // case when the ball does not break from any hight.
}
