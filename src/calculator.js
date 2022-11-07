import { useState } from "react";
import "./styles.css";

const BUTTONS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "+",
  "-",
  "/",
  "*"
];

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleButtonClick = (event) => {
    setInput(input + event.target.value);
  };

  const handleCompute = () => {
    let ans = eval(input);
    setInput(ans);
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="screen">
      <input value={input} onChange={handleInputChange} />

      <div className="buttons">
        {BUTTONS.map((button) => (
          <button
            className="buttonx"
            value={button}
            onClick={handleButtonClick}
          >
            {button}
          </button>
        ))}
        <button className="operator" onClick={handleCompute}>
          =
        </button>
      </div>

      <div className="specialoperator">
        <button className="operator" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}
