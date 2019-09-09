/* Almost from scratch - most of the attention needs to be paid to the indexes and checks 
The premise is:
1. split and recurse
2. merge (aux inside)
3. at the end of merge, iterate indexes just applied to aux, and assign them to the same indexes in A
*/

A = [4, 1, 3, 5, 9, 0, 6, 2];
mergesort(A, 0, A.length - 1);
console.log(A);
console.log('hi');


function mergesort(A, start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        mergesort(A, start, mid);
        mergesort(A, mid + 1, end);
        merge(A, start, mid, end);
    }
}

function merge(A, start, mid, end) {
    let aux = [];
    let i = start;
    let j = mid + 1;
    let auxi = start;

    while (i <= mid && j <= end) {
        if (A[i] < A[j]) {
            aux[auxi++] = A[i++];
        } else {
            aux[auxi++] = A[j++];
        }
    }

    while (i <= mid) { // Stragglers
        aux[auxi++] = A[i++];
    }
    
    while (j <= end) {
        aux[auxi++] = A[j++];
    }

    for (let k = start; k < aux.length; ++k) { // This part is always problematic
        A[k] = aux[k];
    }
}