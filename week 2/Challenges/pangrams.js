/*
A pangram is a string that contains every letter of the alphabet. 
Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. 
Return either pangram or not pangram as appropriate.
*/

function pangrams(s) {
    // Write your code here
    let stringArray = s.toLowerCase().split('');
    const alpha = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    return alphabet.every(char =>stringArray.includes(char))? "pangram" : "not pangram";
}    

const A = 'We promptly judged antique ivory buckles for the next prize';
const B = 'We promptly judged antique ivory buckles for the prize'

console.log('Sample Test 0:', A);
console.log(pangrams(A), "\n");

console.log('Sample Test 1:', B);
console.log(pangrams(B));