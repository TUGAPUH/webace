import React from "react";
import RepeatOneImg from "../../img/repeate-one.svg";

export const RepeatOne = ({ setCurrentPlayTrack, currentPlayTrack }) => {
  return (
    <img
      style={{
        filter:
          currentPlayTrack.repeatOne &&
          "invert(48%) sepia(14%) saturate(3207%) hue-rotate(130deg)",
      }}
      src={RepeatOneImg}
      alt="RepeatOne"
      title="RepeatOne"
      onClick={() =>
        setCurrentPlayTrack({
          ...currentPlayTrack,
          repeatOne: !currentPlayTrack.repeatOne,
        })
      }
    />
  );
};
