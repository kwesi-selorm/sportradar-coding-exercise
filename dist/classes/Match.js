"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Match {
    constructor(homeTeam, awayTeam, homeScore, awayScore, date, startTime) {
        this.id = `${homeTeam.substring(0, 3).toUpperCase()}_${awayTeam
            .substring(0, 3)
            .toUpperCase()}`;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeScore = homeScore;
        this.awayScore = awayScore;
        this.date = date;
        this.startTime = startTime;
    }
    updateScore(team, score) {
        if (team === this.homeTeam) {
            this.homeScore = score;
        }
        else if (team === this.awayTeam) {
            this.awayScore = score;
        }
    }
}
exports.default = Match;
