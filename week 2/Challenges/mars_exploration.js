/*
A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.
Letters in some of the SOS messages are altered by cosmic radiation during transmission. 
Given the signal received by Earth as a string, "s", 
determine how many letters of the SOS message have been changed by radiation.

Input Format
There is one line of input: a single string, "s".

Returns
int: the number of letters changed during transmission
*/

function marsExploration(s) {
    // Write your code here
    let sos = ['S','O','S'];
    let index = 0;
    let wrong = 0;
    let splitMessage = s.split('')
    splitMessage.forEach(messageLetter => {
        if(messageLetter != sos[index]){
            wrong++;
        }
        
        //increase or reset the index to cycle back through
        if(index === 2){
            index = 0;
        } else {index++}       
    })   
    return wrong;
}

const A = 'SOSSPSSQSSOR';
const B = 'SOSSOT';
const C = 'SOSSOSSOS';

console.log('Sample Test 0:', A);
console.log(marsExploration(A), " letter(s)\n");

console.log('Sample Test 1:', B);
console.log(marsExploration(B) ," letter(s)\n");

console.log('Sample Test 2:', C);
console.log(marsExploration(C) ," letter(s)");