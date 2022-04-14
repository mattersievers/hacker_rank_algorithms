// Given an array of stick lengths, use 3 of them to construct 
// a non-degenerate triangle with the maximum possible perimeter. 
// Return an array of the lengths of its sides 
// as 3 integers in non-decreasing order.
// If no non-degenerate triangle exists, return [-1].

function maximumPerimeterTriangle(sticks) {
    // Sort descending order so that max appears first in list.
    sticks.sort((a,b)=>b-a);
    
    //run through the list of descending sticks
    for(let i = 0; i < sticks.length - 2; i++){
        let a = sticks[i];
        let b = sticks[i+1];
        let c = sticks[i+2];
        // if b+c > a, then the triangle is non-degenerate since:
        // a+c > b (Since a >= b and c >= 1 implies a + c >= b + 1 > b) and
        // a+b > c (Since a >= c and b >= c implies a + b >= c + c > c)
        if(b + c > a){
            return [c,b,a];
        }                
    }
    return [-1];
}

console.log(maximumPerimeterTriangle([3, 9, 2, 15, 3]));