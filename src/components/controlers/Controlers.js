import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TrackArray } from '../../audioFiles/TrackArray';
import Buttons from '../buttons/Buttons';

function Controlers({}) {
  const [audioFilesIsLoop, setAudioFilesIsLoop] = useState(false);
  const [audioFilesPlay, setAudioFilesPlay] = useState(false);
  const [audioFilesStop, setAudioFilesStop] = useState(false);
  const [audioFilesCurrentTime, setAudioFilesCurrentTime] = useState(0);

  let timerId = 0;
  const startCountingTime = () => {
    console.log(Math.floor(TrackArray[0].audio.currentTime));
    timerId = setInterval(() => setCorrectTime(), 1000);
    console.log('start timer');
  };

  const setCorrectTime = () => {
    console.log(audioFilesPlay);
    // if (audioFilesPlay) {
    console.log('check');
    console.log(Math.floor(TrackArray[0].audio.currentTime));
    setAudioFilesCurrentTime(Math.floor(TrackArray[0].audio.currentTime));
    // }
  };

  const isAudioFilePlay = () => {
    console.log('changing play value old value=' + audioFilesPlay);
    const play = audioFilesPlay; //play =false, audioFilesPlay=false
    setAudioFilesPlay(!play); //play =false, audioFilesPlay=true after
    // console.log('is it true ?' + audioFilesPlay);
    if (!play) {
      startCountingTime();
      TrackArray.forEach((song) => {
        song.audio.play();
      });
    } else {
      TrackArray.forEach((song) => {
        song.audio.pause();
      });
      console.log('clear interval');
      clearInterval(timerId);
    }
  };

  const isAudioFileStop = () => {
    setAudioFilesPlay(false);
    setAudioFilesStop(true);
    TrackArray.forEach((song) => {
      song.audio.pause();
    });
    console.log('clear interval');
    clearInterval(timerId);
    setAudioFilesCurrentTime(0);
  };

  const isAudioFileLoop = () => {
    const loop = audioFilesIsLoop; //false
    setAudioFilesIsLoop(!audioFilesIsLoop); // loop =false audio =true
    console.log(audioFilesIsLoop);
    if (audioFilesIsLoop) {
      //true
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
    let sec = Math.floor(secs - hours * 3600 - min * 60);
    if (min < 10) {
      min = '0' + min;
    }
    if (secs < 10) {
      secs = '0' + secs;
    }
    return min + ':' + secs;
  }

  const audioDuration = Math.floor(TrackArray[0].audio.duration);

  return (
    <div>
      <Buttons
        isAudioFilePlay={isAudioFilePlay}
        isAudioFileStop={isAudioFileStop}
        isAudioFileLoop={isAudioFileLoop}
        audioDuration={audioDuration}
        audioFilesCurrentTime={audioFilesCurrentTime}
        // timeClick={timeClick}
        formatSecondsAsTime={formatSecondsAsTime}
        audioFilesIsLoop={audioFilesIsLoop}
        audioFilesPlay={audioFilesPlay}
      ></Buttons>
    </div>
  );
}

export default Controlers;
