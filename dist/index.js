"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WorldCupScoreBoard_1 = __importDefault(require("./classes/WorldCupScoreBoard"));
const Match_1 = __importDefault(require("./classes/Match"));
function printMatchDetails(matches) {
    for (const m of matches) {
        console.log(`${matches.indexOf(m)}. ${m.homeTeam} ${m.homeScore} - ${m.awayScore} ${m.awayTeam}`);
    }
}
// Add a new match
const scoreboard = new WorldCupScoreBoard_1.default();
scoreboard.addMatch(new Match_1.default("USA", "Wales", 0, 0, "2023-09-21", " 17:00"));
printMatchDetails(scoreboard.getLiveScoresSummary());
