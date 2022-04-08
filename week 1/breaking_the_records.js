/* Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.
Function inputs an array of integers representing scores and outputs an array with the numbers of times she broke her records.
Index 0 is for breaking most points records, and index 1 is for breaking least points records.
*/

function breakingRecords(scores) {
    // Write your code here
    console.log(scores);
    let scoreArray = [0,0]
    let min = scores[0];
    let max = scores[0];
    for(let i=1; i < scores.length; i++){
        if(scores[i] > max){
            scoreArray[0]++;
            max = scores[i];
        } else if (scores[i] < min) {
            scoreArray[1]++;
            min = scores[i];
        }
    }
    return scoreArray;
}

console.log("Test case 0: ");
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))

console.log("  ");

console.log("Test case 1: ");
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
