# Sportradar exercise


`App.tsx` is the main interface component which displays the match scorecards. in the WordCupScoreBoard class, `getLiveScoresSummary()` returns a list of the live matches, sorted descending by total score. When some matches have the same total score, they sorted in descending order of date.


Instead of using console logs to show the results of calling the methods of the WordCupScoreBoard, a simple interface is used to display the list of matches

## Methods
### Add match
Pushing the 'Add a match' button adds a pre-defined match between the USA and Wales, as seen in `App.tsx`.

### Finish match
On the other hand, a match can be removed (as complete) by clicking the 'Finish game' button next to the match score card 

