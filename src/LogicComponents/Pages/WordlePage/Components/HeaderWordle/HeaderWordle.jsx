import React from "react";
import style from "./header.module.scss";

export const HeaderWordle = () => {
  return (
    <header className={style.head}>
      <div className={style.square}>W</div>
      <div className={style.square}>O</div>
      <div className={style.square}>R</div>
      <div className={style.square}>D</div>
      <div className={style.square}>L</div>
      <div className={style.square}>E</div>
    </header>
  );
};
