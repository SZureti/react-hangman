import { useState } from "react";
import GuessInput from "./components/GuessInput";
import PuzzleDisplay from "./components/PuzzleDisplay";
import WrongLetters from "./components/WrongLetters";
import "./index.css";
import words from "./words.json";

function App() {
  // Only 6 wrong guesses are allowed.
  const MAX_WRONG = 6;

  // Pick a random word and convert to uppercase so all comparisons are the same
  function randomWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    return word.toUpperCase();
  }

  // The State: two pieces --- Hard Rule in README --- puzzle and guessedLetters

  const [puzzle, setPuzzle] = useState(randomWord);

  const [guessedLetters, setGuessedLetters] = useState([]);

  // make wrong letter equal to guessed letters that are not in the puzzle
  const wrongLetters = guessedLetters.filter(
    (letter) => !puzzle.includes(letter),
  );

  //You win when every letter of the puzzle has been guessed
  const isWon = puzzle
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  // You lose when wrong guesses exceed the max 6 guess limit.
  const isLost = wrongLetters.length > MAX_WRONG;

  // The game end when the player wins or loses
  const gameOver = isWon || isLost;

  // Guesses: Runs when the player submits a letter from GuessInput
  function handleGuess(raw) {
    const letter = raw.trim().toUpperCase();

    // Ignore anything that isn't a single letter
    if (!/^[A-Z]$/.test(letter)) return;

    // If the letter is already guessed add alert()
    if (guessedLetters.includes(letter)) {
      alert(`You already guessed "${letter}".`);
      return;
    }

    const nextGuessed = [...guessedLetters, letter];
    setGuessedLetters(nextGuessed);

    const nextWrong = nextGuessed.filter((l) => !puzzle.includes(l));

    const nextWon = puzzle.split("").every((l) => nextGuessed.includes(l));

    if (nextWon) {
      alert(`You win! The word was "${puzzle}".`);
    } else if (nextWrong.length > MAX_WRONG) {
      alert(`Game over! The word was "${puzzle}".`);
    }
  }

  // Reset to a new round
  function newGame() {
    setPuzzle(randomWord());
    setGuessedLetters([]);
  }

  return (
    <main className="app">
      <header className="masthead">
        <p className="eyebrow">
          One Word. Six Mistakes Allowed. Give It Your Best Guess.
        </p>
        <h1>Outspell the Machine</h1>
      </header>
      <PuzzleDisplay puzzle={puzzle} guessedLetters={guessedLetters} />

      <p className="status">
        Wrong guesses: {wrongLetters.length}
        {isWon && " · You win!"}
        {isLost && " · The machine wins."}
      </p>

      <GuessInput onGuess={handleGuess} disabled={gameOver} />
      <WrongLetters wrongLetters={wrongLetters} />

      <button className="new-game" onClick={newGame}>
        New word
      </button>
    </main>
  );
}

export default App;
