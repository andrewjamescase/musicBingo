import React, { useState } from "react";
import styles from "./Button.module.css";

function Button(props) {
  const [buttonClicked, setButtonClicked] = useState(true);
  function handleClick() {
      console.log("clicked")
    var clickedBoolean = !buttonClicked;
    setButtonClicked(clickedBoolean);
  }
  return (
    <button
      onClick={handleClick}
      className={buttonClicked ? styles.buttonStyle : styles.buttonClicked}
    >
      {props.label}
    </button>
  );
}

export default Button;
