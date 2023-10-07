import React from "react";
import ShuffleImg from "../../img/shuffle.svg";

export const Shuffle = ({
  setCurrentPlayTrack,
  currentPlayTrack,
}) => {
  const startShuffle = () => {
    setCurrentPlayTrack({
      ...currentPlayTrack,
      shuffle: !currentPlayTrack.shuffle,
    });
  };

  return (
    <img
      style={{
        filter:
          currentPlayTrack.shuffle &&
          "invert(48%) sepia(14%) saturate(3207%) hue-rotate(130deg)",
      }}
      src={ShuffleImg}
      alt="Shuffle"
      title="Shuffle"
      onClick={startShuffle}
    />
  );
};
