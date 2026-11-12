function WrongLetters({ wrongLetters }) {
  return (
    <div className="wrong-letters">
      <p className="label">Not in the word</p>
      <div className="letters">
        {wrongLetters.map((letter) => (
          <span className="wrong" key={letter}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default WrongLetters;
