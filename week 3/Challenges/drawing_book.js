// A teacher asks the class to open their books to a page number. A student can either start 
// turning pages from the front of the book or from the back of the book. They always turn pages one at a time. 
// When they open the book, page 1 is always on the right side.
// When they flip page 1, they see pages 2 and 3. 
// Each page except the last page will always be printed on both sides. 
// The last page may only be printed on the front, given the length of the book. 
// If the book is n pages long, and a student wants to turn to page p, 
// what is the minimum number of pages to turn? 
// They can start at the beginning or the end of the book.

// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

function pageCount(n, p) {
    // Write your code here
    if(n%2 === 0){
        //if the last page is even, add one for the "blank" page
        n++;
    }
    for(let i=0; i < p; i++) {
        // i represents the number of flips that need to be made
        // p=2*i and p=2*i+1 capture the pages from opening the book from the front
        // p === n - 2*i and p === n - 2*i - 1 capture opening the book from the end
        if(p === 2*i || p === 2*i+1 || p === n - 2*i || p === n - 2*i - 1){         
            return i;
        }
        
    }
}

console.log("Test Case 0: n = 6 and p = 2" );
console.log(pageCount(6,2),"\n");

console.log("Test Case 1: n = 5 and p = 4" );
console.log(pageCount(5,4));