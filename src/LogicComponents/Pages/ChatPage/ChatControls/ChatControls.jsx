import React, { useState } from "react";
import { InputControl } from "./InputControl";
import { ButtonsControls } from "./ButtonsControls";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { ref, getDownloadURL } from "firebase/storage";
import { serverTimestamp, doc, updateDoc } from "firebase/firestore";
import {
  sendMessage,
  setEdited,
  setValue,
} from "../../../../Store/MainSlice/MainSlice";
import { auth, db, storage } from "../../../../Firebase/firebaseInit";
import { useAuthState } from "react-firebase-hooks/auth";
import { useUploadFile } from "react-firebase-hooks/storage";

export const ChatControls = ({ refEditChat }) => {
  const [selectedFile, setSelectedFile] = useState();
  const dispatch = useDispatch();
  const [edited] = useSelector((state) => [state.mainReducer.edited]);
  const [user] = useAuthState(auth);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const [uploadFile, uploading, snapshot, error] = useUploadFile();
  const value = useSelector((state) => state.mainReducer.value);

  const sendData = async () => {
    if (value) {
      if (edited.edit) {
        const docRef = doc(db, "messages", edited.refEdit);
        refEditChat.current.style.borderTopWidth = "0px";
        refEditChat.current.style.transform = "translateY(100%)";
        await updateDoc(docRef, {
          text: value,
        });
        dispatch(setValue(""));
        dispatch(setEdited({ edit: false, refEdit: null }));
      } else {
        dispatch(
          sendMessage({
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            text: value,
            createdAt: serverTimestamp(),
          })
        );
        dispatch(setValue(""));
      }
    }

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        const currentImgRef = ref(
          storage,
          `images/${selectedFile.name + v4()}`
        );
        await uploadFile(currentImgRef, selectedFile, {
          contentType: selectedFile.type,
        });

        const downloadUrl = await getDownloadURL(currentImgRef);
        dispatch(
          sendMessage({
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            imgUrl: downloadUrl,
            text: selectedFile.name,
            createdAt: serverTimestamp(),
          })
        );
        setSelectedFile(null);
      } else {
        alert(error);
      }
    }
  };

  return (
    <>
      <InputControl refEditChat={refEditChat} sendData={sendData} />
      <ButtonsControls sendData={sendData} setSelectedFile={setSelectedFile} />
    </>
  );
};
