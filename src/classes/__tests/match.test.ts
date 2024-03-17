import Match from '../Match'

describe('The Match class', () => {
  test('constructor should create a match instance with the correct parameters', () => {
    const match = new Match('Nigeria', 'Argentina', 4, 2, '2022-05-13', '12:00')
    expect(match.id).toBe('NIG_ARG')
    expect(match.homeTeam).toBe('Nigeria')
    expect(match.awayTeam).toBe('Argentina')
    expect(match.homeScore).toBe(4)
    expect(match.awayScore).toBe(2)
    expect(match.date).toBe('2022-05-13')
    expect(match.startTime).toBe('12:00')
  })

  test("method 'updateScores' should update the scores of the match with the home and away scores", () => {
    const match = new Match('Nigeria', 'Argentina', 4, 2, '2022-05-13', '12:00')
    match.updateScores(3, 1)
    expect(match.homeScore).toBe(3)
    expect(match.awayScore).toBe(1)
  })
})
