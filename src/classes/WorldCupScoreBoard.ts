import Match from './Match.ts'
import matches from '../data/matches.ts'

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
  updateScore(matchId: string, team: string, score: number) {
    const existingMatch = this.matches.find((m) => m.id === matchId)
    if (existingMatch !== undefined) {
      existingMatch.updateScore(team, score)
    }
  }

  // Finish a match
  finishMatch(matchId: string) {
    const existingMatch = this.matches.find((m) => m.id === matchId)
    const liveMatches = this.matches.filter((m) => m.id !== matchId)
    if (existingMatch !== undefined) {
      this.matches = liveMatches
    }
  }

  // Get a summary of all matches ordered by total score and date added if same total score
  getLiveScoresSummary() {
    return sortMatches(this.matches)
  }
}

export default WorldCupScoreBoard
