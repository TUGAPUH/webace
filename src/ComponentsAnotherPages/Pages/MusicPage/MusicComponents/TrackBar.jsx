import React, { useEffect, useRef } from "react";
import style from "../music.module.scss";

const TrackBar = ({
  currentAudioRef,
  currentPlayTrack,
  setCurrentPlayTrack,
  musicList,
}) => {
  const barRef = useRef();

  useEffect(() => {
    if (
      currentAudioRef.duration === currentAudioRef.ct &&
      currentAudioRef.duration !== undefined
    ) {
      if (currentPlayTrack.repeatOne) {
        currentAudioRef.ref.current.currentTime = 0;
        currentAudioRef.ref.current.play();
        return;
      }

      if (currentPlayTrack.shuffle) {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * musicList.length);
        } while (randomIndex === currentPlayTrack.index);
        setCurrentPlayTrack({
          ...currentPlayTrack,
          id: musicList[randomIndex].id,
          idForStop: musicList[randomIndex].id,
          index: randomIndex,
        });
        console.log(randomIndex);
        return;
      }

      if (currentPlayTrack.index === musicList.length - 1) {
        var nextDataSong = { id: musicList[0].id, index: 0 };
      } else {
        var nextDataSong = {
          id: musicList[currentPlayTrack.index + 1].id,
          index: currentPlayTrack.index + 1,
        };
      }

      setCurrentPlayTrack({
        ...currentPlayTrack,
        id: nextDataSong.id,
        idForStop: nextDataSong.id,
        index: nextDataSong.index,
      });
    }
  }, [
    currentAudioRef.duration === currentAudioRef.ct,
    currentPlayTrack.repeatOne,
  ]);

  const changeMusicTime = (e) => {
    let width = barRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width;
    currentAudioRef.ref.current.currentTime =
      divprogress * currentAudioRef.ref.current.duration;
  };

  return (
    <div className={style.seekBar}>
      <div
        className={style.bar}
        onClick={changeMusicTime}
        style={{ "--trackProgressWidth": currentAudioRef.progress }}
        ref={barRef}
      ></div>
    </div>
  );
};

export default TrackBar;
