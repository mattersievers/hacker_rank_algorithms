// Julius Caesar protected his confidential information by encrypting it using a cipher. 
// Caesar's cipher shifts each letter by a number of letters. 
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
// In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
// Input:
// The unencrypted string s, and k, the number of letters to rotate the alphabet by.

function caesarCipher(s, k) {
    // Write your code here
    let alphaSet = 'abcdefghijklmnopqrstuvwxyz';
    let cipheredMessage = '';
    for(let i=0; i< s.length; i++){
        let char = s[i];
        if (!alphaSet.includes(char.toLowerCase())){
            cipheredMessage = cipheredMessage.concat(char);
        } else if(alphaSet.includes(char)){
            let ciphCharIndex = (alphaSet.indexOf(char) + k) % 26;
            let ciphChar = alphaSet[ciphCharIndex];
            cipheredMessage = cipheredMessage.concat(ciphChar); 
        } else {
            let ciphCharIndex = (alphaSet.indexOf(char.toLowerCase()) + k) % 26;
            let ciphChar = alphaSet[ciphCharIndex].toUpperCase();
            cipheredMessage = cipheredMessage.concat(ciphChar); 
        }
    }
    return cipheredMessage;
}

let s = 'middle-Outz';
let k = 2;
console.log("Test Case 5: Move", s, "by ", k, "spaces.");
console.log(caesarCipher(s,k),"\n");

s = 'Always-Look-on-the-Bright-Side-of-Life';
k = 5;
console.log("Test Case 11: Move", s, "by ", k, "spaces.");
console.log(caesarCipher(s,k));

// A bit of a warning because the only punctuation the examples and Sample Test Cases had were underscores 
// until you submit and test it against the other Test Cases.  
s = 'Hello_World!';
k = 4;
console.log("Test Case 0: Move", s, "by ", k, "spaces.");
console.log(caesarCipher(s,k));
