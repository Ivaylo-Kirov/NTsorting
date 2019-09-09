/* poorly performing and considered the worst as it's always O(n2)
repeatedly iterate and track max, and swap with right most unsorted index */

/* coded this from scratch just using the above description */

const A = [4, 1, 5, 2, 3];

let right = A.length - 1;

while (right > 0) {
    let i = 0;
    let curMax = A[i];
    let curMaxi = i;
    while (i < right) {
        if (curMax < A[i+1]) {
            curMax = A[i+1];
            curMaxi = i+1;
        }
        i++;
    }
    let temp = A[right];
    A[right] = A[curMaxi];
    A[curMaxi] = temp;
    right--;
}