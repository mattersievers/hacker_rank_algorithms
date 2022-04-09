// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    a.sort((a,b) => {return a-b});
    while(a.length > 1){
        if(a[0] === a[1]){
            a.shift();
            a.shift();
        } else {
            return a[0];
        }
    }
    return a[0];    
}

console.log("Test Case 0: [1]");
console.log(lonelyinteger([1]));
console.log("");

console.log("Test Case 1: [1, 1, 2]");
console.log(lonelyinteger([1, 1, 2]));
console.log("");

console.log("Test Case 2: [0, 0, 1, 2, 1]");
console.log(lonelyinteger([0, 0, 1, 2, 1]));
console.log("");