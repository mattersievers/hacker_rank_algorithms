/* Given five positive integers, find the minimum and maximum values that can be 
calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a 
single line of two space-separated long integers. 

*/
function miniMaxSum(arr) {
    // Write your code here
    let minSum = 0;
    let maxSum = 0;
    arr.sort(function(a,b){return a-b});
    for(let i=0; i<4; i++){
        minSum += arr[i];
    }
    for(let i=1; i<5; i++){
        maxSum += arr[i];    
    }
    console.log(minSum,maxSum)    
}

console.log('Test Case 0: ', "[1, 2, 3, 4, 5]");
miniMaxSum([1, 2, 3, 4, 5]);
console.log(' ');
console.log('Test Case 14: ', "[7, 69, 2, 221, 8974]");
miniMaxSum([7, 69, 2, 221, 8974]);
