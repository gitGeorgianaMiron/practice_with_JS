/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

*/


const scoreDolphins = ( 96 + 108 + 89) / 3;
const scoreKoalas = (97 + 112 + 101) / 3;

console.log(scoreDolphins, scoreKoalas);


if (scoreDolphins > scoreKoalas){
  console.log('The team Dolphins is better');
}else if(scoreKoalas > scoreDolphins ){
  console.log('The team Koalas is better');
} else if ( scoreKoalas === scoreDolphins){
  console.log('Iguality, both win the trophy');
}else {
  console.log('No one wins the trophy');
}


// 3. EXTRA: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
// HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks.





