import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumViolentRed");
  const [disableButton, setDisableButton] = useState(false);
  const newButtonColor =
    buttonColor === "MediumViolentRed" ? "MidnightBlue" : "MediumViolentRed";
  const changeColor = () => {
    if (buttonColor === "MediumViolentRed") {
      setButtonColor("MidnightBlue");
    } else {
      setButtonColor("MediumViolentRed");
    }
  };

  return (
    <div>
      <button
        style={{ backgroundColor: disableButton ? "gray" : buttonColor }}
        onClick={changeColor}
        disabled={disableButton}
      >
        Change to {replaceCamelWithSpace(newButtonColor)}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        checked={disableButton}
        onChange={(e) => setDisableButton(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
