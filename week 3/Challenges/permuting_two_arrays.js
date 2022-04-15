// There are two n-element arrays of integers, A and B. 
// Permute them into some A' and B' such that 
// the relation A'[i] + B'[i] >= k holds for all i where 0 <= i < n.

// There will be q queries consisting of A, B, and k. 
// For each query, return YES if some permutation A', B' satisfying the relation exists. 
// Otherwise, return NO.

function twoArrays(k, A, B) {
    // Write your code here
    A.sort((a,b)=>{return a-b});
    B.sort((a,b)=>{return b-a});
    let message = 'YES';
    
    for(let i=0; i < A.length; i++) {
        if(A[i] + B[i] < k){
            return message = 'NO';
        }
    }
    return message;
}

const A = [2,1,3];
const B = [7,8,9];
const k1 = 10;

console.log('Sample Test 0:', A, " and ", B, " are greater than or equal to ", k1);
console.log(twoArrays(k1,A,B), "\n");

const C = [1,2,2,1];
const D = [3,3,3,4];
const k2 = 5;
console.log('Sample Test 0:', C, " and ", D, " are greater than or equal to ", k2);
console.log(twoArrays(k2,C,D), "\n");

const E = [7,6,8,4,2];
const F = [5,2,6,3,1];
const k3 = 10;
console.log('Sample Test 1:', E, " and ", F, " are greater than or equal to ", k3);
console.log(twoArrays(k3,E,F), "\n");