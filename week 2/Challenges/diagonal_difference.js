/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals. 

*/

function diagonalDifference(arr) {
    // Write your code here
    let leftTRSum = 0;
    let rightTLSum = 0;
    for(let i=0; i < arr.length; i++){
        let opposite = arr.length - (i+1);
        leftTRSum += arr[i][i];
        rightTLSum += arr[i][opposite];
    }
    return Math.abs(leftTRSum - rightTLSum);
}

const A=[[11, 2, 4],[4, 5, 6],[10, 8, -12]];

console.log('Sample Test 0:\n', A);
console.log(diagonalDifference(A));
