import { useState } from "react";

// Create the child with useState
function GuessInput({ onGuess, disabled }) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    //stop the page from reloading
    event.preventDefault();

    // send the letter to the app and clear the box
    if (value.trim() === "") return;
    onGuess(value);
    setValue("");
  }

  return (
    <form className="guess-input" onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength={1}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="A-Z"
        disabled={disabled}
        aria-label="Guess a letter"
        autoFocus
      />
      <button type="submit" disabled={disabled}>
        Guess
      </button>
    </form>
  );
}

export default GuessInput;
