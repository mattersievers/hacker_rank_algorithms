// Given an array of integers, find the longest subarray where the absolute difference 
// between any two elements is less than or equal to 1.

function pickingNumbers(a) {
    // Write your code here
    let maxLength = 1; //stores the length of the largest subarray
    let count = 1; // counts the length of the current subarray
    a.sort((x,y)=> x-y); //sort the array so desired elements are adjacent
    for(let i=0; i< a.length; i+=count){
        count = 1;
        let j = i+1;
        // j counts how many elements ahead of i are less than an absolute difference of 1.
        // and the for loop increments over the counted elements
        while(Math.abs(a[i]-a[j]) <= 1){
            count++;
            j++
        }
        //update the max length if the current count is larger
        maxLength = Math.max(maxLength, count);
    }   
    return maxLength;
    
}

A = [4, 6, 5, 3, 3, 1];
B = [1, 2, 2, 3, 1, 2];

console.log('Sample Test 0:\n', A);
console.log(pickingNumbers(A));

console.log('Sample Test 1:\n', B);
console.log(pickingNumbers(B));
