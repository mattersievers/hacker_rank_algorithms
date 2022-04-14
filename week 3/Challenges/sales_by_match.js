// There is a large pile of "n" socks that must be paired by color. 
// Given an array, "ar", of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
    // Write your code here
    let pairCount = 0;
    ar.sort((a,b) => a-b);
    for(let i=0; i< n - 1 ; i++){
        if(ar[i] === ar[i+1]){
            pairCount++;
            i++;
        }
    }
    return pairCount;
}

console.log("Test case 0: 9, [10, 20, 20, 10, 10, 30, 50, 10, 20] \n", sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]), "\n");

console.log("Test case 8: 10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3] \n", sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
