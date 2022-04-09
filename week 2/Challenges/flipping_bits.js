/*
You will be given a list of 32 bit unsigned integers. Flip all the bits (1 -> 0 and 0 -> 1) 
and return the result as an unsigned integer.

Take 1 for example, as unsigned 32-bits is 00000000000000000000000000000001 
and doing the flipping we get 11111111111111111111111111111110 which in turn is 4294967294.
*/

function flippingBits(n) {
    // Write your code here
    let solutions = []
    let splitNumbers = n.toString().split(/\n/);
    splitNumbers.forEach(number => {
        let flippedNumber = 0;
        for(let i = 31; i >=0; i--){
            if(parseInt(number) >= Math.pow(2,i)){
                number = parseInt(number) - Math.pow(2,i);
            } else {
                flippedNumber = flippedNumber + Math.pow(2,i);
            } 
        }
        solutions.push(flippedNumber)
           
    })
    return solutions
}

console.log("Sample Test Case 0: \n2147483647 \n1 \n0");
console.log("Flipped: \n", flippingBits("2147483647 \n1 \n0"));
console.log("\n");

console.log("Sample Test Case 1: 4 \n123456");
console.log("Flipped: \n", flippingBits("4 \n123456"));
console.log("\n");

console.log("Sample Test Case 2: 0 \n802743475 \n35601423");
console.log("Flipped: \n", flippingBits("0 \n802743475 \n35601423"));
console.log("\n");