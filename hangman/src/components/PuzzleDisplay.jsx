function PuzzleDisplay({ puzzle, guessedLetters }) {
  const slots = puzzle
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"));

  return (
    <div className="puzzle-display" aria-label="Puzzle word">
      {slots.map((char, index) => (
        <span className="slot" key={index}>
          {char}
        </span>
      ))}
    </div>
  );
}

export default PuzzleDisplay;
