/* explaining this can not do it justice, but the main point is
1. partition and get index
2. recurse on halves based on that index
*/

/* Partition */
/*
1. choose pivot
2. squeeze left and squeeze right
3. put pivot value in the right place
4. return the pivot index
*/

A = [4, 1, 3, 5, 9, 0, 6, 2];
quicksort(A, 0, A.length -1);

function quicksort(A, start, end) {
    if (start < end) {
        let partitionPoint = partition(A, start, end);
        quicksort(A, start, partitionPoint);
        quicksort(A, partitionPoint + 1, end);
    }
}

function partition(A, start, end) {
    let pivot = A[start];
    let i = start + 1;
    let j = end;

    while (i < j) {
        while (A[i] < pivot && i <= j) {
            i++;
        }
        while (A[j] > pivot && i < j) {
            j--;
        }
        if (i < j) {
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    }
    A[start] = A[i-1];
    A[i-1] = pivot;
    return i-1;

}

console.log(A);
console.log('hi');