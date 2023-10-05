import React, { useState } from "react";
import style from "../music.module.scss";
import More from "../img/more-vertical.svg";
import { StartStopBtn } from "./StartStopBtn";
import { Loader } from "../../../../Components/Loader/Loader";

export const Tracks = ({
  musicList,
  loading,
  setCurrentPlayTrack,
  currentPlayTrack,
  setCurrentAudioRef,
  currentAudioRef,
  setIsStartPlayable,
}) => {
  const [isMultiPlay, setIsMultiPlay] = useState(null);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {musicList?.map((track, ind) => {
        return (
          <div className={style.trackSection} key={ind}>
            <img src={track.img} alt="TrackImg" />

            <StartStopBtn
              song={track.audio}
              id={track.id}
              setIsMultiPlay={setIsMultiPlay}
              isMultiPlay={isMultiPlay}
              setCurrentPlayTrack={setCurrentPlayTrack}
              currentPlayTrack={currentPlayTrack}
              isPlayTrack={currentPlayTrack.idForStop === track.id}
              setCurrentAudioRef={setCurrentAudioRef}
              currentAudioRef={currentAudioRef}
              index={ind}
              setIsStartPlayable={setIsStartPlayable}
            />

            <div className={style.trackInfo}>
              <span>{track.nameOfSong}</span>
              <span style={{ opacity: "0.39" }}>{track.author}</span>
            </div>
            <div className={style.trackTime}>{track.duration}</div>
            <img src={More} alt="More" />
          </div>
        );
      })}
    </>
  );
};
