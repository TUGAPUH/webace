import React, { useEffect, useRef } from "react";
import Volume from "../img/volume.svg";
import style from "../music.module.scss";

const VolumeBarControls = ({ currentAudioRef, setMusicVolume, musicVolume }) => {
  const volumeRef = useRef();

  useEffect(() => {
    if(currentAudioRef.ref){
      currentAudioRef.ref.current.volume = musicVolume;
    }
  }, [musicVolume, currentAudioRef.ref])

  const changeVolume = (e) => {
    const offset = e.nativeEvent.offsetX;
    let width = volumeRef.current.clientWidth;
    console.log(offset / width);
    setMusicVolume(offset / width);
  };

  return (
    <div className={style.volumeBarControls}>
      <img src={Volume} alt="Volume" />
      <div
        className={style.volumeBar}
        onClick={changeVolume}
        ref={volumeRef}
        style={{
          "--volumeWidth": musicVolume * 100 + "%",
        }}
      ></div>
    </div>
  );
};

export default VolumeBarControls;
