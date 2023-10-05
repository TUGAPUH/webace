import React, { useEffect, useState } from "react";
import Pause from "../../img/PauseFooter.png";
import Start from "../../img/Frame 7.png";

export const Play = ({ setCurrentPlayTrack, currentPlayTrack }) => {
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    if (currentPlayTrack?.isPlay) {
      setIsPlay(true);
    } else {
      setIsPlay(false);
    }
  }, [currentPlayTrack?.isPlay]);

  const playOrPause = () => {
    if (isPlay) {
      setCurrentPlayTrack({
        ...currentPlayTrack,
        isPlay: false,
        isMusicBarActivity: true,
      });
      setIsPlay(false);
    } else {
      setCurrentPlayTrack({
        ...currentPlayTrack,
        isPlay: true,
        isMusicBarActivity: true,
      });
      setIsPlay(true);
    }
  };
  return (
    <img
      title="Play"
      src={isPlay ? Pause : Start}
      alt={isPlay ? "Pause" : "Start"}
      onClick={playOrPause}
    />
  );
};
