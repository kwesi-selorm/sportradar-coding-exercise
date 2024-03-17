# Sportradar coding exercise

## Directory structure
Located in the root of the application are config files, package.json, README, among others.

The main code files are located in the `src` directory also located in the root directory.
* `index.ts` is the main file comprising implementation examples of the WorldCupScoreboard and Match classes.
* `types.ts` contains the type definitions
* The 'classes' directory includes the definitions of the Match and WorldCupScoreboard classes, as well as corresponding unit tests
* The 'data' directory comprises any hardcoded data used for testing and example purposes

## Running the application
All methods of the Scoreboard class have examples in `index.ts`. 
Install the necessary dependencies using `npm install`.
With 'sportradar-coding-exercise,' as the current directory in the terminal, run `npm run dev`.
As a start, the first method implementation is uncommented while the rest aren't.
Running the command will log the updated scoreboard after calling the method on the scoreboard instance.
The original scoreboard is first logged a reference to easily identify the updates made.
Once the following method implementations are uncommented, the others will have to be commented out.

## Methods
The implemented methods are adding a new match with 0 - 0 scores for the home and away teams, updating a matches scores using a pair of provided scores, finishing a match by removing it from the scoreboard live matches list, and returning a list of the matches sorted first by total scores per match and by date started 

## Tests
Unit tests specific to the classes have been written to verify that all methods work as expected. Running ``npm run test`` runs all unit test suites.

