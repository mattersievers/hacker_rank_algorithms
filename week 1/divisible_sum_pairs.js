/* 
Given an array of integers and a positive integer k, determine the number of (i,j) pairs 
where i < j  and ar[i] + ar[j] is divisible by k.
*/

function divisibleSumPairs(n, k, ar) {
    let pairs = 0;
    
    for(let i = 0; i < ar.length; i++){
        for(let j=i+1; j < ar.length; j++){
            let sum = ar[i] + ar[j];
            if(sum % k === 0){
                pairs++;
            }
        }
    }
    return pairs;
}

console.log("Test Case 0: ", "6, 3, [1, 3, 2, 6, 1, 2]");
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));