import WorldCupScoreBoard from '../WorldCupScoreBoard'
import Match from '../Match'

describe('The WorldCupScoreBoard class', () => {
  test("method 'addMatch' should add a new match to the scoreboard", () => {
    const scoreboard = new WorldCupScoreBoard()
    const matchesCount = scoreboard.matches.length
    const newMatch = new Match('USA', 'Wales', 0, 0, '2023-09-21', ' 17:00')
    scoreboard.addMatch(newMatch)
    expect(scoreboard.matches.length).toBe(matchesCount + 1)
    expect(scoreboard.matches).toContainEqual(newMatch)
  })

  test("method 'updateScore' should update the scores of the match with the provided scores", () => {
    const scoreboard = new WorldCupScoreBoard()
    scoreboard.updateScore('CRO_SEN', 3, 0)
    const match = scoreboard.getMatchScores('CRO_SEN')
    if (match) {
      expect(match.homeScore).toBe(3)
      expect(match.awayScore).toBe(0)
    }
  })

  test('method "finishMatch" should remove the match from the scoreboard', () => {
    const scoreboard = new WorldCupScoreBoard()
    const matchesCount = scoreboard.matches.length
    const match = scoreboard.getMatchScores('GER_POL')
    scoreboard.finishMatch('GER_POL')
    expect(scoreboard.matches.length).toBe(matchesCount - 1)
    expect(scoreboard.matches).not.toContainEqual(match)
  })

  test('method "getLiveScoresSummary" should return all live matches sorted descending by total score and ascending by match date for matches with the same total score', () => {
    const scoreboard = new WorldCupScoreBoard()
    const match1 = new Match('Germany', 'Poland', 3, 1, '2023-11-04', '10:00')
    const match2 = new Match('Ghana', 'Australia', 4, 1, '2023-10-19', '10:00')
    const match3 = new Match('France', 'Belgium', 3, 2, '2023-10-18', ' 16:00')
    scoreboard.matches = [match1, match2, match3]
    const result = [match3, match2, match1]
    expect(scoreboard.getLiveScoresSummary()).toEqual(result)
  })
})
