// Two players are playing a game of Tower Breakers! 
// Player 1 always moves first, and both players always play optimally.
// The rules of the game are as follows:

// - Initially there are n towers.
// - Each tower is of height m.
// - The players move in alternating turns.
// - In each turn, a player can choose a tower of height x and 
//   reduce its height to y, where 1 <= y < x and y evenly divides x.
// - If the current player is unable to make a move, they lose the game.

// Given the values of n and m, determine which player will win. 
// If the first player wins, return 1. Otherwise, return 2.


function towerBreakers(n, m) {
    // Write your code here
    // if there are an even number of towers, P2 can mirror P1's moves and win
    // if n is odd, then an even number of rows "collapse" and we are essentially
    // playing the same game on a single row where P1 starts
    // player 1 can then take the row down to one, thus winning
    // there's a special case of where all the towers are a height of 1, in which case P2 wins by default 
    if(n%2 === 0 || m === 1){
        return 2;
    } else {return 1}  
}


console.log("Sample Test Case 0:");
console.log("2 towers 2 height: Player ", towerBreakers(2,2));
console.log("1 tower 4 height: Player ", towerBreakers(1,4),"\n");

console.log("Sample Test Case 1:");
console.log("100000 towers 1 height: Player ", towerBreakers(100000, 1));
console.log("100001 towers 1 height: Player ", towerBreakers(100001, 1));
console.log("374625 towers 796723 height: Player ", towerBreakers(374625, 796723));
console.log("950929 towers 183477 height: Player ", towerBreakers(950929, 183477));
console.log("950929 towers 183477 height: Player ", towerBreakers(950929,183477));
console.log("732159 towers 779867 height: Player ", towerBreakers(732159,779867));
console.log("598794 towers 596985 height: Player ", towerBreakers(598794,596985));
console.log("156054 towers 445934 height: Player ", towerBreakers(156054,445934));
console.log("156030 towers 99998 height: Player ", towerBreakers(156030,99998));
console.log("58097 towers 459353 height: Player ", towerBreakers(58097,459353),"\n");

console.log("Sample Test Case 11:");
console.log("1 towers 7 height: Player ", towerBreakers(1,7));
console.log("3 towers 7 height: Player ", towerBreakers(3,7));