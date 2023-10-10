import { useState } from "react";
import Box from "./Box";

function BoxGrid({ numBoxes = 9 }) {
  const [boxes, setBoxes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const reset = () => {
    setBoxes([false, false, false, false, false, false, false, false]);
  };

  const toggleBox = (idx) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((value, i) => {
        if (i === idx) {
          return !value;
        } else {
          return value;
        }
      });
    });
  };
  return (
    <div className="BoxGrid">
      {boxes.map((b, idx) => (
        <Box isActive={b} toggle={() => toggleBox(idx)} />
      ))}
      <button onClick={reset}>RESET</button>
    </div>
  );
}

export default BoxGrid;
