import style from "./chat.module.scss";

import { ImgModal } from "../../Modals/ImgModal/ImgModal";
import editImg from "./img/edit.svg";
import daleteImg from "./img/delete.svg";
import { useState } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../../Firebase/firebaseInit";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { setEdited, setValue } from "../../../Store/MainSlice/MainSlice";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { DeleteMessageModal } from "../../Modals/DeleteMessageModal/DeleteMessageModal";

export const MineMessage = ({ imgUrl, text, time, onClick }) => {
  let bodyOfMessage = "";
  if (text) {
    bodyOfMessage = <div className={style.messageMine}>{text}</div>;
  }
  if (imgUrl) {
    bodyOfMessage = (
      <img
        className={style.messageMine}
        onClick={onClick}
        src={imgUrl}
        alt="messageOfInput"
      />
    );
  }

  return (
    <div className={style.flexMessageM}>
      {bodyOfMessage}
      <div
        className={style.time}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {time}
      </div>
    </div>
  );
};

export const OpponentMessage = ({ imgUrl, text, time, onClick }) => {
  let bodyOfMessage = "";
  if (text) {
    bodyOfMessage = <div className={style.messageOpponent}>{text}</div>;
  }
  if (imgUrl) {
    bodyOfMessage = (
      <img
        className={style.messageOpponent}
        onClick={onClick}
        src={imgUrl}
        alt="messageOfInput"
      />
    );
  }
  return (
    <div className={style.flexMessageO}>
      {bodyOfMessage}
      <div className={style.time}>{time}</div>
    </div>
  );
};

export const DateOfMessage = ({ date }) => {
  return (
    <div className={style.dateMessage}>
      <div className={style.line} style={{ marginLeft: "60px" }} />
      <div className={style.time + " " + style.timeBlock}>{date}</div>
      <div className={style.line} style={{ marginRight: "60px" }} />
    </div>
  );
};

export const Avatar = ({ photo, isOwner }) => {
  return (
    <img
      src={photo}
      alt="avatar"
      className={
        isOwner
          ? style.positionAvaR + " " + style.avatar
          : style.positionAvaL + " " + style.avatar
      }
    />
  );
};

export const TextField = ({ showPopup }) => {
  const [modalShow, setModalShow] = useState(null);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const dbFiredatabase = collection(db, "messages");
  const [messageRefDelete, setMessageRefDelete] = useState(null);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const [messages] = useCollectionData(
    query(collection(db, "messages"), orderBy("createdAt"))
  );

  const editMessage = async (message, refByTime) => {
    if (message) {
      dispatch(setValue(message));
      const docRef = await getDocs(refByTime);
      docRef.forEach((doc) =>
        dispatch(
          setEdited({ edit: true, refEdit: doc.id, editedText: message })
        )
      );
      showPopup();
    } else {
      dispatch(setEdited({ edit: false, refEdit: null }));
    }
  };

  const deleteMessage = async (refByTime) => {
    setDeleteModalShow(true);
    const docRef = await getDocs(refByTime);
    docRef.forEach((doc) => setMessageRefDelete(doc.id));
  };

  const changeModalShow = (index) => {
    setModalShow(index);
  };

  return (
    <>
      {messages?.map((message, index, array) => {
        const isOwner = message.uid === user.uid;
        const timeCurrentIndex = array[index].createdAt?.seconds * 1000;
        const timePrevIndex = array[index - 1]?.createdAt?.seconds * 1000;
        let time = new Date(timeCurrentIndex).toLocaleString("default", {
          hour: "numeric",
          minute: "numeric",
        });

        const refByTime = query(
          dbFiredatabase,
          where("createdAt", "==", message.createdAt),
          limit(1)
        );

        const getDate = (date) => {
          if (date) {
            date = new Date(date).toLocaleString("en-US", {
              day: "numeric",
              month: "long",
            });
            return date;
          } else {
            return null;
          }
        };

        return (
          <div key={index}>
            {index === 0 ? (
              <DateOfMessage date={getDate(timeCurrentIndex)} />
            ) : getDate(timeCurrentIndex) !==
              (getDate(timePrevIndex) !== null
                ? getDate(timePrevIndex)
                : getDate(timeCurrentIndex)) ? (
              <DateOfMessage date={getDate(timeCurrentIndex)} />
            ) : (
              <div />
            )}

            <div
              className={style.messageWithAvatar}
              style={{ justifyContent: isOwner ? "flex-end" : "flex-start" }}
            >
              <Avatar photo={message.photoUrl} isOwner={isOwner} />

              {isOwner ? (
                <>
                  <MineMessage
                    onClick={() => changeModalShow(index)}
                    imgUrl={message.imgUrl}
                    text={message.text}
                    time={time}
                  />

                  <ImgModal
                    id={index}
                    show={modalShow === index}
                    onHide={() => setModalShow(null)}
                  >
                    <img
                      className={style.zoomImage}
                      style={{ width: "inherit" }}
                      src={message.imgUrl}
                      alt="ImgModal"
                    />
                  </ImgModal>

                  <div className={style.pseudoMine}>
                    {/* Edite message */}
                    <img
                      src={editImg}
                      alt="Edit"
                      onClick={() => editMessage(message.text, refByTime)}
                    />
                    {/* Delete message */}
                    <img
                      src={daleteImg}
                      alt="Delete"
                      onClick={() => deleteMessage(refByTime)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <OpponentMessage
                    onClick={() => changeModalShow(index)}
                    imgUrl={message.imgUrl}
                    text={message.text}
                    time={time}
                  />
                  <ImgModal
                    id={index}
                    show={modalShow === index}
                    onHide={() => setModalShow(null)}
                  >
                    <img
                      className={style.zoomImage}
                      style={{ width: "inherit" }}
                      src={message.imgUrl}
                      alt="ImgModal"
                    />
                  </ImgModal>
                </>
              )}
            </div>
          </div>
        );
      })}

      <DeleteMessageModal
        id="deleteMessage"
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        messageRefDelete={messageRefDelete}
      />
    </>
  );
};
