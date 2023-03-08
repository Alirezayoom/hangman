export default function HangmanWord() {
  const word = "hello";
  const guessedLetters = ["h", "i", "l"];
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        fontSize: "2.5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: "5px solid black" }}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
