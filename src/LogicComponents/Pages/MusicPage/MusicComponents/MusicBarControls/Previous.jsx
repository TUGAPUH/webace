import React from "react";
import PreviousIcon from "../../img/previous.svg";

export const Previous = ({
  currentPlayTrack,
  setCurrentPlayTrack,
  musicList,
}) => {
  const previousSong = () => {
    if (currentPlayTrack.index === 0) {
      var nextDataSong = {
        id: musicList[musicList.length - 1].id,
        index: musicList.length - 1,
      };
    } else {
      var nextDataSong = {
        id: musicList[currentPlayTrack.index - 1].id,
        index: currentPlayTrack.index - 1,
      };
    }

    setCurrentPlayTrack({
      ...currentPlayTrack,
      id: nextDataSong.id,
      idForStop: nextDataSong.id,
      index: nextDataSong.index,
    });
  };
  return <img src={PreviousIcon} alt="Previous" title="Previous" onClick={previousSong} />;
};
