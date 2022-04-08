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
