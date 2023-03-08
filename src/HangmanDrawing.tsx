const HEAD = (
  <div
    style={{
      width: "30px",
      height: "30px",
      border: "5px solid black",
      background: "transparent",
      borderRadius: "100rem",
      position: "absolute",
      top: "30px",
      right: "-17.5px",
    }}
  ></div>
);

const BODY = (
  <div
    style={{
      width: "5px",
      height: "60px",
      background: "black",
      position: "absolute",
      right: "0",
      top: "65px",
    }}
  ></div>
);

const RIGHT_ARM = (
  <div
    style={{
      width: "40px",
      height: "5px",
      backgroundColor: "black",
      position: "absolute",
      right: "-40px",
      top: "85px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LEFT_ARM = (
  <div
    style={{
      width: "40px",
      height: "5px",
      backgroundColor: "black",
      position: "absolute",
      right: "5px",
      top: "85px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const RIGHT_LEG = (
  <div
    style={{
      width: "40px",
      height: "5px",
      backgroundColor: "black",
      position: "absolute",
      right: "-35px",
      top: "120px",
      rotate: "50deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LEFT_LEG = (
  <div
    style={{
      width: "40px",
      height: "5px",
      backgroundColor: "black",
      position: "absolute",
      right: "0px",
      top: "120px",
      rotate: "-50deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div
        style={{
          width: "5px",
          height: "32px",
          backgroundColor: "black",
          position: "absolute",
          right: "0",
        }}
      ></div>
      <div
        style={{
          width: "80px",
          height: "5px",
          background: "black",
          marginLeft: "50px",
        }}
      ></div>
      <div
        style={{
          height: "200px",
          width: "5px",
          background: "black",
          marginLeft: "50px",
        }}
      ></div>
      <div style={{ height: "5px", width: "100px", background: "black" }}></div>
    </div>
  );
}
