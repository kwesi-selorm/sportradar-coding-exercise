import { IMatch } from '../types'

class Match implements IMatch {
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
    this.id = `${homeTeam.substring(0, 3).toUpperCase()}_${awayTeam
      .substring(0, 3)
      .toUpperCase()}`
    this.homeTeam = homeTeam
    this.awayTeam = awayTeam
    this.homeScore = homeScore
    this.awayScore = awayScore
    this.date = date
    this.startTime = startTime
  }

  updateScore(home: number, away: number) {
    this.homeScore = home
    this.awayScore = away
  }
}

export default Match
