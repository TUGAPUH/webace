import React from "react";
import style from "../music.module.scss";

const TrackFooterInfo = ({currentTrackInfo}) => {
  return (
    <div className={style.trackFooterInfo}>
      <img src={currentTrackInfo?.img} alt="trackImg" />
      <div className={style.trackInfo}>
        <span>{currentTrackInfo?.nameOfSong}</span>
        <span>{currentTrackInfo?.author}</span>
      </div>
    </div>
  );
};

export default TrackFooterInfo;
