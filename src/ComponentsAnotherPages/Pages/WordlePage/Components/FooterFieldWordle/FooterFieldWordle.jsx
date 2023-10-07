import React, { useEffect, useState } from "react";
import style from "./footer.module.scss";
import { KeyField } from "./KeyField";

export const FooterFieldWordle = ({ handleKeyPressed, guesses }) => {
  const topKeyboardArr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const midKeyboardArr = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const bottomKeyboardArr = ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"];
  const [isTopLetter, setIsTopLetter] = useState([]);
  const [isMidLetter, setIsMidLetter] = useState([]);
  const [isBottomLetter, setIsBottomLetter] = useState([]);

  useEffect(() => {
    if (guesses[0] !== undefined) {
      guesses.map((elemFirstArr) => {
        elemFirstArr?.map((currentElem) => {
          if (topKeyboardArr.includes(currentElem.key)) {
            setIsTopLetter((prev) => [
              ...prev,
              { key: currentElem.key, color: currentElem.color },
            ]);
          }
          if (midKeyboardArr.includes(currentElem.key)) {
            setIsMidLetter((prev) => [
              ...prev,
              { key: currentElem.key, color: currentElem.color },
            ]);
          }
          if (bottomKeyboardArr.includes(currentElem.key)) {
            setIsBottomLetter((prev) => [
              ...prev,
              { key: currentElem.key, color: currentElem.color },
            ]);
          }
        });
      });
    }
  }, [guesses]);

  return (
    <footer className={style.keyboard}>
      <section>
        {topKeyboardArr.map((val, ind) => {
          let findIndex = isTopLetter.findIndex((el) => el.key === val);
          return (
            <KeyField
              key={ind}
              isGuessed={findIndex !== -1}
              value={val}
              handleKeyPressed={handleKeyPressed}
            />
          );
        })}
      </section>
      <section>
        {midKeyboardArr.map((val, ind) => {
          let findIndex = isMidLetter.findIndex((el) => el.key === val);
          return (
            <KeyField
              key={ind}
              isGuessed={findIndex !== -1}
              value={val}
              handleKeyPressed={handleKeyPressed}
            />
          );
        })}
      </section>
      <section>
        {bottomKeyboardArr.map((val, ind) => {
          let findIndex = isBottomLetter.findIndex((el) => el.key === val);
          return (
            <KeyField
              key={ind}
              isGuessed={findIndex !== -1}
              value={val}
              handleKeyPressed={handleKeyPressed}
            />
          );
        })}
      </section>
    </footer>
  );
};
