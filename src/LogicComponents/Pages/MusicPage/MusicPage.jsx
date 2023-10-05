import React, { useEffect, useRef, useState } from "react";
import style from "./music.module.scss";
import { Tracks } from "./MusicComponents/Tracks";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../../Firebase/firebaseInit";
import MusicBarControls from "./MusicComponents/MusicBarControls";
import VolumeBarControls from "./MusicComponents/VolumeBarControls";
import TrackFooterInfo from "./MusicComponents/TrackFooterInfo";
import TrackBar from "./MusicComponents/TrackBar";
import { Search } from "./MusicComponents/Search";

const MusicPage = () => {
  const [musicList, loading] = useCollectionData(collection(db, "music"));
  const [currentAudioRef, setCurrentAudioRef] = useState({});
  const [currentTrackInfo, setCurrentTrackInfo] = useState([]);
  const [currentPlayTrack, setCurrentPlayTrack] = useState({});
  const [isStartPlayable, setIsStartPlayable] = useState(false);
  const [sortedMusicList, setSortedMusicList] = useState(null);
  const playerFooterRef = useRef();

  useEffect(() => {
    setCurrentTrackInfo(
      musicList?.find((element) => element.id === currentPlayTrack.id)
    );
  }, [currentPlayTrack?.id]);

  useEffect(() => {
    isStartPlayable && playerFooterRef.current.classList.add(style.animate);
  }, [isStartPlayable]);

  return (
    <div className={style.musicPageWrapper}>
      <div className={style.musicPlayer}>
        <Search musicList={musicList} setSortedMusicList={setSortedMusicList} />
        <div className={style.musicList}>
          <Tracks
            musicList={sortedMusicList === null ? musicList : sortedMusicList}
            loading={loading}
            setCurrentAudioRef={setCurrentAudioRef}
            currentAudioRef={currentAudioRef}
            setCurrentPlayTrack={setCurrentPlayTrack}
            currentPlayTrack={currentPlayTrack}
            setIsStartPlayable={setIsStartPlayable}
          />
        </div>
      </div>
      {currentTrackInfo?.length !== 0 && (
        <div className={style.playerFooter} ref={playerFooterRef}>
          <div className={style.infoTrackBar}>
            <TrackFooterInfo currentTrackInfo={currentTrackInfo} />
            <MusicBarControls
              setCurrentPlayTrack={setCurrentPlayTrack}
              currentPlayTrack={currentPlayTrack}
              musicList={musicList}
            />
            <VolumeBarControls currentAudioRef={currentAudioRef} />
          </div>
          <TrackBar
            currentAudioRef={currentAudioRef}
            setCurrentPlayTrack={setCurrentPlayTrack}
            currentPlayTrack={currentPlayTrack}
            musicList={musicList}
          />
        </div>
      )}
    </div>
  );
};

export default MusicPage;
