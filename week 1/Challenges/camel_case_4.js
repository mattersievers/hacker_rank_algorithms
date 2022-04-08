/* 
Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format:

- Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V 
followed by a semi-colon followed by the words you'll need to operate on.

- The operation will either be S (split) or C (combine)

- M indicates method, C indicates class, and V indicates variable

- In the case of a split operation, the words will be a camel case method, class or variable name that you need to 
split into a space-delimited list of words starting with a lowercase letter.

- In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters 
that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses 
to differentiate them from variable names.

Output Format:

- For each input line, your program should print either the space-delimited list of words (in the case of a split operation) 
or the appropriate camel case string (in the case of a combine operation).
*/

function processData(input) {
    //Enter your code here
    
    //split the input based on semicolons and line breaks
    let splitInput = input.split(/[;\n]/);
    //cycle through the split input. Every third element indicates the operation.
    for (let i=0; i< splitInput.length; i+=3){ 
        
        //first variable indicates that the word should be combined to camelCase
        if(splitInput[i] === "C"){
            let diffWords = splitInput[i+2].split(" ");
            let camelCase = "";
            //variables and methods don't start capitalized
            if(splitInput[i+1] === "V" || splitInput[i+1] === "M") {
                camelCase = camelCase.concat(diffWords[0]);           
                for (let j=1; j< diffWords.length; j++){
                    //line breaks were throwing off solution. replace with space
                    let camelWord = diffWords[j].charAt(0).toUpperCase() + diffWords[j].slice(1).replace(/(\r)/, "");
                    
                    camelCase = camelCase.concat(camelWord);
                }
                //methods get parentheses
                if(splitInput[i+1] === "M"){
                    camelCase = camelCase+"()";
                }  
            } else if(splitInput[i+1] === "C"){
                //classes start with capitalized words
                for (let j=0; j< diffWords.length; j++){
                    let camelWord = diffWords[j].charAt(0).toUpperCase() +                              diffWords[j].slice(1);
                    camelCase = camelCase.concat(camelWord);
                }    
            }
            console.log(camelCase);
            
        //first variable indicates that the word is currently in camelCase and              should be split into separate words    
        } else if(splitInput[i] === "S"){
            let splitWords = "";
            let camelWord = splitInput[i+2];
            //look for capital letters to split the word at
            let words = camelWord.split(/(?=[A-Z])/);
            splitWords = splitWords + words[0].toLowerCase(); 
                for(let i= 1; i< words.length; i++){
                    splitWords = splitWords + " " + words[i].toLowerCase()
                }
            
            if(splitInput[i+1] === "C" || splitInput[i+1] === "V"){
                console.log(splitWords);            
            } else if(splitInput[i+1] === "M"){
                splitWords = splitWords.split("(");
                console.log(splitWords[0]);
            }
        }
    }
} 

let test0 = "S;V;iPad \nC;M;mouse pad \nC;C;code swarm \nS;C;OrangeHighlighter";

console.log("  ");
console.log("Test Case 0 input: ")
console.log(test0);
console.log("  ");
console.log("Test Case 0 output: ")
processData(test0);
