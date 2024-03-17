import Match from './Match'
import matches from '../data/matches'

export function sortMatches(matches: Match[]) {
  return matches.sort((a, b) => {
    const totalA = a.homeScore + a.awayScore
    const totalB = b.homeScore + b.awayScore
    if (totalA === totalB) {
      return new Date(a.date) < new Date(b.date) ? -1 : 1
    } else {
      return totalA > totalB ? -1 : 1
    }
  })
}

class WorldCupScoreBoard {
  public matches: Array<Match> = matches

  // Add a new match
  addMatch(match: Match) {
    this.matches.push(match)
  }

  // Update a match score
  updateScore(matchId: string, home: number, away: number) {
    const existingMatch = this.matches.find((m) => m.id === matchId)
    if (existingMatch !== undefined) {
      existingMatch.updateScores(home, away)
    } else {
      throw new Error(`A match with the id ${matchId} does not exist`)
    }
  }

  // Finish a match
  finishMatch(matchId: string) {
    const existingMatch = this.matches.find((m) => m.id === matchId)
    const liveMatches = this.matches.filter((m) => m.id !== matchId)
    if (existingMatch !== undefined) {
      this.matches = liveMatches
    } else {
      throw new Error(`A match with the id ${matchId} does not exist`)
    }
  }

  // Get a single match
  getMatchScores(matchId: string) {
    const existingMatch = this.matches.find((m) => m.id === matchId)
    if (existingMatch !== undefined) {
      return existingMatch
    } else {
      throw new Error(`A match with the id ${matchId} does not exist`)
    }
  }

  // Get a summary of all matches ordered descending by total score
  // and ascending by date added if having the same total score
  getLiveScoresSummary() {
    return sortMatches(this.matches)
  }
}

export default WorldCupScoreBoard
