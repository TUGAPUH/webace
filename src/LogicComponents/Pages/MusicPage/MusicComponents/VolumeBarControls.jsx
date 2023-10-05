import React, { useRef } from "react";
import Volume from "../img/volume.svg";
import style from "../music.module.scss";

const VolumeBarControls = ({ currentAudioRef }) => {
  const volumeRef = useRef();

  const changeVolume = (e) => {
    const offset = e.nativeEvent.offsetX;
    let width = volumeRef.current.clientWidth;

    currentAudioRef.ref.current.volume = offset / width;
  };

  return (
    <div className={style.volumeBarControls}>
      <img src={Volume} alt="Volume" />
      <div
        className={style.volumeBar}
        onClick={changeVolume}
        ref={volumeRef}
        style={{
          "--volumeWidth": currentAudioRef?.ref?.current.volume * 100 + "%",
        }}
      ></div>
    </div>
  );
};

export default VolumeBarControls;
