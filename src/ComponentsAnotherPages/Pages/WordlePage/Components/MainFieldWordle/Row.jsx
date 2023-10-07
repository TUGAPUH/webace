import React from "react";
import style from "./main.module.scss";

export const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className={style.rowOfGrid}>
        {guess.map((state, ind) => (
          <div
            key={ind}
            className={style.flip}
            style={{
              animationDelay: ind * 100 + "ms",
              "--CurrentColor": state.color,
            }}
          >
            {state.key.toUpperCase()}
          </div>
        ))}
      </div>
    );
  }
  if (currentGuess) {
    let lettersArr = currentGuess.split("");
    return (
      <div className={style.rowOfGrid}>
        {lettersArr.map((val, ind) => (
          <div key={ind}>{val.toUpperCase()}</div>
        ))}
        {[...Array(5 - lettersArr.length)].map((val, ind) => (
          <div key={ind}></div>
        ))}
      </div>
    );
  }

  return (
    <div className={style.rowOfGrid}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
