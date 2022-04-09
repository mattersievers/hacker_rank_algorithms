/*
Sean invented a game involving a
matrix where each cell of the matrix contains an integer. He
can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum
of the elements in the submatrix located in the upper-left quadrant of the matrix.
Given the initial configurations for matrices, help Sean reverse the rows and columns of each matrix in the
best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY matrix as parameter.
*/
function flippingMatrix(matrix) { 
    let n = matrix.length; 
    let sum = 0, sumTop = 0, sumBottom = 0;
    //sum n x n matrix
    for(let i=0; i < n/2; i++){ 
        let largerRowTop =0, largerRowBottom = 0, sumTopLeft = 0, sumTopRight = 0, sumBottomRight = 0, sumBottomLeft = 0;

        for(let j=0; j < n/2; j++){ 
            sumTopLeft += matrix[i][j]; 
            sumTopRight += matrix[i][n-1-j];
        }
        largerRowTop = Math.max(sumTopLeft,sumTopRight);
        sumTop += largerRowTop;

        for(let j=0; j < n/2; j++ ){ 
            sumBottomLeft += matrix[n-1-i][j];
            sumBottomRight += matrix[n-1-i][n-1-j]; 
        }
        largerRowBottom = Math.max(sumBottomLeft,sumBottomRight);
        sumBottom += largerRowBottom;
    }
    sum = Math.max(sumTop, sumBottom)
return sum;
}    

const A = [[1,2,3,4],[8,7,6,5],[9,10,11,12],[16,15,14,13]];
const B = [[110,120,130,140],[8,7,6,5],[19,20,21,22],[16,15,14,13]];
const C = [[11,12,13,14,15,16],[8,7,6,5,4,3,2],[19,20,21,22,23,24],[27,26,25,24,23,22],[38,37,36,35,34,33],[41,42,43,44,45,46]];

console.log(A);
console.log(flippingMatrix(A));

console.log("\n",B);
console.log(flippingMatrix(B));

console.log("\n",C);
console.log(flippingMatrix(C));