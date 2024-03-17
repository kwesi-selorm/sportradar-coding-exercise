import WorldCupScoreBoard from "./classes/WorldCupScoreBoard";
import Match from "./classes/Match";

const scoreboard = new WorldCupScoreBoard();
function printMatchDetails(matches: Array<Match>) {
  for (const m of matches) {
    console.log(
      `${matches.indexOf(m)}. ${m.homeTeam} ${m.homeScore} - ${m.awayScore} ${
        m.awayTeam
      }`,
    );
  }
}

console.log("Original scoreboard");
printMatchDetails(scoreboard.getLiveScoresSummary());
console.log("\n");

// START A NEW MATCH
// scoreboard.addMatch(new Match("USA", "Wales", 0, 0, "2023-09-21", " 17:00"));
// console.log('Add match between the USA and Wales')
// printMatchDetails(scoreboard.getLiveScoresSummary());

// UPDATE MATCH SCORE
// scoreboard.updateScore("GER_POL", 6, 1);
// console.log("Update the home team score for Germany vs Poland");
// printMatchDetails(scoreboard.getLiveScoresSummary());

// FINISH A MATCH
scoreboard.finishMatch("FRA_BEL");
console.log("Finish the match between France and Belgium");
printMatchDetails(scoreboard.getLiveScoresSummary());
