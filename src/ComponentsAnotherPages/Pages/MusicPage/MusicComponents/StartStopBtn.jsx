import React, { useEffect, useRef, useState } from "react";
import Pause from "../img/pause.png";
import Start from "../img/start.png";
import style from "../music.module.scss";

export const StartStopBtn = ({
  song,
  id,
  setIsMultiPlay,
  isMultiPlay,
  setCurrentPlayTrack,
  currentPlayTrack,
  isPlayTrack,
  setCurrentAudioRef,
  currentAudioRef,
  index,
  setIsStartPlayable,
}) => {
  const audioRef = useRef();
  const imgAudioRef = useRef();
  const [isPlay, setIsPlay] = useState();
  const [playWithStop, setPlayWithStop] = useState(false);

  useEffect(() => {
    if (isPlay) {
      if (isMultiPlay !== null) {
        isMultiPlay.audioRef.current.pause();
        playWithStop && (isMultiPlay.audioRef.current.currentTime = 0);
        setIsMultiPlay(null);
        setCurrentAudioRef({ ...currentAudioRef, ref: audioRef });
        audioRef.current.play();
      } else {
        setCurrentAudioRef({ ...currentAudioRef, ref: audioRef });
        setIsMultiPlay({ audioRef: audioRef });
        audioRef.current.play();
      }
    } else {
      playWithStop && (audioRef.current.currentTime = 0);
      audioRef.current.pause();
    }
  }, [isPlay]);

  useEffect(() => {
    if (currentPlayTrack?.idForStop === id) {
      setCurrentAudioRef({ ...currentAudioRef, ref: audioRef });
    }
  }, [currentPlayTrack?.idForStop]);

  useEffect(() => {
    setIsPlay(isPlayTrack);
  }, [isPlayTrack]);

  useEffect(() => {
    if (currentPlayTrack.isMusicBarActivity) {
      setPlayWithStop(false);
    } else {
      setPlayWithStop(true);
    }
  }, [currentPlayTrack?.isMusicBarActivity]);

  useEffect(() => {
    if (currentPlayTrack.id === id) {
      setIsPlay(currentPlayTrack.isPlay);
    }
  }, [currentPlayTrack?.isPlay]);

  const playOrPause = () => {
    setIsStartPlayable(true);
    setCurrentAudioRef({ ...currentAudioRef, ref: audioRef });
    if (currentPlayTrack.idForStop === id) {
      setCurrentPlayTrack({
        ...currentPlayTrack,
        idForStop: null,
        id,
        isPlay: false,
        isMusicBarActivity: false,
        index,
      });
    } else {
      setCurrentPlayTrack({
        ...currentPlayTrack,
        idForStop: id,
        id,
        isPlay: true,
        isMusicBarActivity: false,
        index,
      });
    }
  };

  const onPlaying = () => {
    const duration = audioRef.current.duration;
    const ct = audioRef.current.currentTime;

    setCurrentAudioRef({
      ...currentAudioRef,
      duration,
      ct,
      progress: (ct / duration) * 100 + "%",
    });
  };

  return (
    <>
      <audio src={song} ref={audioRef} onTimeUpdate={onPlaying} />
      <img
        ref={imgAudioRef}
        className={style.playOrPause}
        src={isPlay ? Pause : Start}
        alt={isPlay ? "Pause" : "Start"}
        onClick={playOrPause}
      />
    </>
  );
};
