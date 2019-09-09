
A = [4, 2, 3, 1, 5, 9];

for (let i = 1; i < A.length; ++i) {
    insert(A, i, A[i]);
}

/* keep swapping previous with current as long as they are bigger than 'value' being considered
Once the value is no longer bigger, make that index equal the 'value' being considered */
function insert(A, pos, value) {
    i = pos - 1;
    while (i >= 0 && A[i] > value) {
        A[i+1] = A[i];
        i--;
    }
    A[i+1] = value;
}

