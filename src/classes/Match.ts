import { MatchType } from '../types.ts'

class Match implements MatchType {
  id: string
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  date: string
  startTime: string
  constructor(
    homeTeam: string,
    awayTeam: string,
    homeScore: number,
    awayScore: number,
    date: string,
    startTime: string
  ) {
    this.id = `${homeTeam.substring(0, 3).toUpperCase()}_${awayTeam.substring(0, 3).toUpperCase()}`
    this.homeTeam = homeTeam
    this.awayTeam = awayTeam
    this.homeScore = homeScore
    this.awayScore = awayScore
    this.date = date
    this.startTime = startTime
  }

  updateScore(team: string, score: number) {
    if (team === this.homeTeam) {
      this.homeScore = score
    } else if (team === this.awayTeam) {
      this.awayScore = score
    }
  }
}

export default Match
