import React from "react";
import { setEdited, setValue } from "../../../../Store/MainSlice/MainSlice";
import editColor from "../img/editColor.svg";
import style from "../chat.module.scss";
import close from "../img/close.svg";
import { useDispatch, useSelector } from "react-redux";

export const PopupEditField = ({ refEditChat }) => {
  const [edited] = useSelector((state) => [state.mainReducer.edited]);
  const dispatch = useDispatch();

  const closeEdit = () => {
    dispatch(setValue(""));
    dispatch(setEdited({ edit: false, refEdit: null, editedText: "" }));
    refEditChat.current.style.borderTopWidth = "0px";
    refEditChat.current.style.transform = "translateY(100%)";
  };

  return (
    <div ref={refEditChat} className={style.editField}>
      <div className={style.imgBlock}>
        <img src={editColor} alt="edit" />
      </div>
      <div className={style.flexBlock}>
        <div className={style.popup}>{edited.editedText}</div>
      </div>
      <div
        className={style.imgBlock}
        style={{ marginLeft: "0px", marginRight: "10px" }}
      >
        <img
          src={close}
          style={{ cursor: "pointer" }}
          onClick={closeEdit}
          alt="close"
        />
      </div>
    </div>
  );
};
