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
    console.log(matrix); 
    let n = matrix.length; 
    let sum = 0;
    //sum n x n matrix
    for(let i=0; i < n/2; i++){ 
        let largerRow1 = 0;  
        let largerRow2 = 0;  
        let sum1 = 0;
        let sum2 = 0; 
        let sum3 = 0; 
        let sum4 = 0;

        for(let j=0; j < n/2; j++ ){ 
            sum1 += matrix[i][j]; 
            sum2 += matrix[i][n-1-j];
            largerRow1 = Math.max(sum1,sum2);
        }

        for(let j=0; j < n/2; j++ ){ 
            sum3 += matrix[n-1-i][j];
            sum4 += matrix[n-1-i][n-1-j]; 
            largerRow2 = Math.max(sum3,sum4);
        }

        sum = Math.max(largerRow1,largerRow2); 
        console.log(sum,sum1,sum2,sum3,sum4)
    }
return sum;
}    