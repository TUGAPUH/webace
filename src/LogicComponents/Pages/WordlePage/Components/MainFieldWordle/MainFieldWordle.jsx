import React from "react";
import style from "./main.module.scss";
import { Row } from "./Row";

export const MainFieldWordle = ({ guesses, currentGuess, turn }) => {
  /* useEffect(() => {
    if (optionsOfGameField.length > 4) {
      let elem = optionsOfGameField.slice(0, 5);
      let result = "";
      for (let i = 0; i < elem.length; i++) {
        result += elem[i].letter;
      }
      if (result === randomWorld.toLowerCase()) {
        toast.error("This didn't work.");
        console.log("toast");
      }
    }
  }, [optionsOfGameField]);

  useEffect(() => {
    if (keyPressed) {
      return setOptionsOfGameField([
        ...optionsOfGameField,
        {
          letter: keyPressed,
        },
      ]);
    }

    if (keyPressed === "Backspace") {
      console.log(optionsOfGameField.pop());
      return setOptionsOfGameField(optionsOfGameField.pop());
    }

    console.log(keyPressed);
  }, [keyPressed]); */

  return (
    <>
      <main className={style.grid}>
        {guesses.map((guess, ind) => {
          if (turn === ind) {
            return <Row key={ind} currentGuess={currentGuess}/>;
          }
          return <Row key={ind} guess={guess} />;
        })}
      </main>
    </>
  );
};
