import React from "react";
import NextIcon from "../../img/next.svg";

export const Next = ({ currentPlayTrack, setCurrentPlayTrack, musicList }) => {
  const nextSong = () => {

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
  };

  return <img src={NextIcon} title="Next" alt="Next" onClick={nextSong} />;
};
