// A numeric string, s, is beautiful if it can be split into a sequence 
// of two or more positive integers, a[1],a[2],...,a[n], satisfying the following conditions:
// 1. a[i]-a[i-1] = 1 for any 1 < i <= n (i.e., each element in the sequence is 1 more than the previous element).
// 2. No a[i] contains a leading zero. For example, we can split s = 10203 into the sequence {1,02,03}, 
// but it is not beautiful because 02 and 03 have leading zeroes.
// 3. The contents of the sequence cannot be rearranged. For example, we can split s=312 into the sequence {3,1,2}, 
// but it is not beautiful because it breaks our first constraint (i.e., 1 - 3 =/= 1 ).

// Perform q queries where each query consists of some integer string s. 
// For each query, print whether or not the string is beautiful on a new line. 
// If it is beautiful, print YES x, where x is the first number of the increasing sequence. 
// If there are multiple such values of x, choose the smallest. Otherwise, print NO.

function separateNumbers(s) {
    // Write your code here
    let beautiful = false;
    let currentLength = 1;
    let start = ""
    for(let i=0; i < s.length - currentLength; i++){
        let firstNumber = parseInt(s.slice(i,i+currentLength));
        let secondNumber = String(firstNumber + 1);
        let secondCheck = s.slice(i+currentLength, i+currentLength+secondNumber.length)
        
        if(secondCheck === secondNumber){
            if(i===0){start = String(firstNumber)}
            i = i + currentLength - 1;
            currentLength = secondNumber.length;
            beautiful = true;
        }
        else {beautiful = false; currentLength++; i--}
        
    }
    
    beautiful? console.log("YES", start) : console.log("NO");
}

console.log("Sample Test Case 0: \n");
separateNumbers('1234');
separateNumbers('91011');
separateNumbers("99100");
separateNumbers("101103");
separateNumbers("010203")
separateNumbers("13");
separateNumbers("1");

console.log("Sample Test Case 1: \n");
separateNumbers("99910001001");
separateNumbers("7891011");
separateNumbers("9899100");
separateNumbers("999100010001");