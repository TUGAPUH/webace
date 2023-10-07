import React from "react";
import style from "../music.module.scss";
import { Play } from "./MusicBarControls/Play";
import { Next } from "./MusicBarControls/Next";
import { Previous } from "./MusicBarControls/Previous";
import { RepeatOne } from "./MusicBarControls/RepeatOne";
import { Shuffle } from "./MusicBarControls/Shuffle";

const MusicBarControls = ({
  setCurrentPlayTrack,
  currentPlayTrack,
  musicList,
}) => {
  return (
    <div className={style.musicBarControls}>
      <Shuffle
        setCurrentPlayTrack={setCurrentPlayTrack}
        currentPlayTrack={currentPlayTrack}
      />
      <Previous
        currentPlayTrack={currentPlayTrack}
        musicList={musicList}
        setCurrentPlayTrack={setCurrentPlayTrack}
      />
      <Play
        setCurrentPlayTrack={setCurrentPlayTrack}
        currentPlayTrack={currentPlayTrack}
      />
      <Next
        currentPlayTrack={currentPlayTrack}
        musicList={musicList}
        setCurrentPlayTrack={setCurrentPlayTrack}
      />
      <RepeatOne
        setCurrentPlayTrack={setCurrentPlayTrack}
        currentPlayTrack={currentPlayTrack}
      />
    </div>
  );
};

export default MusicBarControls;
