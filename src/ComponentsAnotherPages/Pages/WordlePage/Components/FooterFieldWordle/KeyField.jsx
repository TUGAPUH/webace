import React from "react";
import style from "./footer.module.scss";

export const KeyField = ({ value, isGuessed, handleKeyPressed }) => {
  return (
    <div
      className={style.key}
      style={{
        background: isGuessed && "#2671bf",
      }}
      onClick={() => handleKeyPressed({key: `${value}`})}
    >
      {value.toUpperCase()}
    </div>
  );
};
