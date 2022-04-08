/* 
There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. 
Return an array of the results.
*/

function matchingStrings(strings, queries) {
    // Write your code here
    let results = []
    for(let i=0; i < queries.length; i++){
        let match = 0;    
        for(let j=0; j < strings.length; j++){
            if(queries[i] === strings[j]){
                match++;
            }
        }
        results.push(match);    
    }
    return results;
}

console.log("\nSample Test Case 0 input: \n['aba', 'baba', 'aba', 'xzxb'],[ 'aba', 'xzxb', 'ab']");
console.log('Sample Test Case 0 output: ');
console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'],[ 'aba', 'xzxb', 'ab']))


console.log("\nSample Test Case 1 input: \n['def', 'de', 'fgh'],[ 'de', 'lmn', 'fgh']");
console.log('Sample Test Case 1 output: ');
console.log(matchingStrings(['def', 'de', 'fgh'],[ 'de', 'lmn', 'fgh']));

console.log("\nSample Test Case 2 input: \n['abcde' , 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn','sdaklfj', 'asdjf'],\n['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']");
console.log('Sample Test Case 2 output: ');
console.log(matchingStrings(['abcde' , 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn',
'sdaklfj', 'asdjf'], ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']))