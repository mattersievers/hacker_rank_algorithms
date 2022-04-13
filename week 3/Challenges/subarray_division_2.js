/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

- The length of the segment matches Ron's birth month, "m" and,
- The sum of the integers on the squares is equal to his birth day "d".

Determine how many ways she can divide the chocolate.
*/

function birthday(s, d, m) {
    // Write your code here
    let counter = 0; 
    for(let i=0; i < s.length - m + 1; i++){
        let  portion = s.slice(i, i+m);
        const sum = portion.reduce(
            (previousValue, currentValue) => previousValue + currentValue
        );
        if(sum === d){
            counter++;
        }
    }
    return counter;
}  

console.log("Test Case 0:")
console.log(birthday([1,2,1,3,2], 3, 2),"\n");

console.log("Test Case 3:")
console.log(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7));