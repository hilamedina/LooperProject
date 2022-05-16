import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TrackArray } from '../../audioFiles/TrackArray';
import Buttons from '../buttons/Buttons';
import '../audioFile/AudioFile.css';

function Controlers() {
  const [audioFilesIsLoop, setAudioFilesIsLoop] = useState(false);
  const [audioFilesPlay, setAudioFilesPlay] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [audioFilesStop, setAudioFilesStop] = useState(false);
  const [audioFilesCurrentTime, setAudioFilesCurrentTime] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [duration, setDuration] = useState(0);
  const sliderBar = useRef();
  const requestRef = useRef();

  const audioDuration = Math.floor(TrackArray[0].audio.duration);
  useEffect(() => {
    const trackTime = audioDuration;
    setDuration(trackTime);
    sliderBar.current.max = trackTime;
  }, [audioDuration]);

  let timerId = 0;
  const startCountingTime = () => {
    timerId = setInterval(() => setCorrectTime(), 1000);
  };

  const setCorrectTime = () => {
    setAudioFilesCurrentTime(Math.floor(TrackArray[0].audio.currentTime));
  };

  const isAudioFilePlay = () => {
    const prevState = audioFilesPlay;
    const newState = !prevState;
    setAudioFilesPlay(!prevState);
    if (newState) {
      startCountingTime();
      TrackArray.forEach((song) => {
        song.audio.play();
        requestRef.current = requestAnimationFrame(rangePlay);
      });
    } else {
      console.log(audioFilesPlay);
      console.log('pauseclick', prevState);
      TrackArray.forEach((song) => {
        song.audio.pause();
        cancelAnimationFrame(requestRef.current);
      });
      clearInterval(timerId);
    }
  };

  const isAudioFileStop = () => {
    setAudioFilesPlay(false);
    setAudioFilesStop(true);
    TrackArray.forEach((song) => {
      song.audio.pause();
      song.audio.currentTime = 0;
    });
    clearInterval(timerId);
  };

  const isAudioFileLoop = () => {
    const loop = audioFilesIsLoop;
    setAudioFilesIsLoop(!loop);
    if (!loop) {
      TrackArray.forEach((song) => {
        song.audio.loop = true;
      });
    } else {
      setAudioFilesIsLoop(!audioFilesIsLoop);
      TrackArray.forEach((song) => {
        song.audio.loop = false;
      });
    }
  };
  function formatSecondsAsTime(secs) {
    let hours = Math.floor(secs / 3600);
    let min = Math.floor((secs - hours * 3600) / 60);
    // eslint-disable-next-line no-unused-vars
    let sec = Math.floor(secs - hours * 3600 - min * 60);
    if (min < 10) {
      min = '0' + min;
    }
    if (secs < 10) {
      secs = '0' + secs;
    }
    return min + ':' + secs;
  }

  const range = () => {
    TrackArray.forEach((song) => {
      song.audio.currentTime = sliderBar.current.value;
    });
    setAudioFilesCurrentTime(sliderBar.current.value);
  };

  const rangePlay = () => {
    sliderBar.current.value = Math.floor(TrackArray[0].audio.currentTime);
    setAudioFilesCurrentTime(sliderBar.current.value);
  };
  requestRef.current = requestAnimationFrame(rangePlay);

  return (
    <div>
      <input
        onChange={range}
        type="range"
        min="0"
        max="17"
        id="range-bar"
        defaultValue="0"
        ref={sliderBar}
      />
      <Buttons
        isAudioFilePlay={isAudioFilePlay}
        isAudioFileStop={isAudioFileStop}
        isAudioFileLoop={isAudioFileLoop}
        audioFilesCurrentTime={audioFilesCurrentTime}
        formatSecondsAsTime={formatSecondsAsTime}
        audioFilesIsLoop={audioFilesIsLoop}
        audioFilesPlay={audioFilesPlay}
      ></Buttons>
    </div>
  );
}

export default Controlers;
