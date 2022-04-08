/*
The function is expected to return an INTEGER.
The function accepts INTEGER_ARRAY arr as parameter.
The original challenge specifies that there are an odd number of elements in the array. 
This code will calculate the median for even or odd number of elements.
*/

function findMedian(arr) {
    // Write your code here let median;
    //sort arr in ascending order
    arr = arr.sort((a,b)=>{return a-b});
    //if the array is an even length, we need to average the middle numbers 
    if(arr.length % 2 === 0){
        while(arr.length >2){ 
            arr.pop();
            arr.shift();
        }
        median = (arr[0] + arr[1])/2;
    } else{
        //the array is an odd length,just pick the middle number 
        while(arr.length > 1){
            arr.pop();
            arr.shift();    
        }
        median = arr[0];
    }
    return median;
}
    
console.log("Custom Case 0: [1, 2, 3, 4, 5, 6, 7, 8]");
console.log(findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9]),"\n");

console.log("Custom Case 1: [1, 2, 3, 4, 5, 6, 7, 8, 9]");
console.log(findMedian([1, 2, 3, 4, 5, 6, 7, 8]),"\n");

console.log("Custom Case 2: [121, 2432, 35, 44, 450, 52, 68, 706, 824, 129, 125, 598, 980]");
console.log(findMedian([121, 2432, 35, 44, 450, 52, 68, 706, 824, 129, 125, 598, 980]),"\n");

console.log("Custom Case 3: [121, 2432, 35, 44, 450, 52, 68, 706, 824, 129, 125, 598, 980, 1000]");
console.log(findMedian([121, 2432, 35, 44, 450, 52, 68, 706, 824, 129, 125, 598, 980, 1000]),"\n");
