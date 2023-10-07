import React from "react";
import style from "../chat.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../../../Store/MainSlice/MainSlice";
import { PopupEditField } from "./PopupEditField";

export const InputControl = ({ sendData, refEditChat }) => {
  const [value] = useSelector((state) => [state.mainReducer.value]);
  const dispatch = useDispatch();

  const pressedKey = (e) => {
    const key = e.key;
    if (key === "Enter") {
      sendData();
    }
  };

  return (
    <div className={style.inputBlock}>
      <PopupEditField refEditChat={refEditChat} />
      <input
        value={value}
        type="text"
        placeholder="Write a message..."
        onChange={(e) => dispatch(setValue(e.target.value))}
        onKeyDown={(e) => pressedKey(e)}
      />
    </div>
  );
};
