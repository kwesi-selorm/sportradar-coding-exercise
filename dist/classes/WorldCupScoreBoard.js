"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortMatches = void 0;
const matches_1 = __importDefault(require("../data/matches"));
function sortMatches(matches) {
    return matches.sort((a, b) => {
        const totalA = a.homeScore + a.awayScore;
        const totalB = b.homeScore + b.awayScore;
        if (totalA === totalB) {
            return new Date(a.date) < new Date(b.date) ? -1 : 1;
        }
        else {
            return totalA > totalB ? -1 : 1;
        }
    });
}
exports.sortMatches = sortMatches;
class WorldCupScoreBoard {
    constructor() {
        this.matches = matches_1.default;
    }
    // Add a new match
    addMatch(match) {
        this.matches.push(match);
    }
    // Update a match score
    updateScore(matchId, team, score) {
        const existingMatch = this.matches.find((m) => m.id === matchId);
        if (existingMatch !== undefined) {
            existingMatch.updateScore(team, score);
        }
    }
    // Finish a match
    finishMatch(matchId) {
        const existingMatch = this.matches.find((m) => m.id === matchId);
        const liveMatches = this.matches.filter((m) => m.id !== matchId);
        if (existingMatch !== undefined) {
            this.matches = liveMatches;
        }
    }
    // Get a summary of all matches ordered by total score and date added if same total score
    getLiveScoresSummary() {
        return sortMatches(this.matches);
    }
}
exports.default = WorldCupScoreBoard;
