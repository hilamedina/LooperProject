import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TrackArray } from '../../audioFiles/TrackArray';
import Buttons from '../buttons/Buttons';

function Controlers({}) {
  const [audioFilesIsLoop, setAudioFilesIsLoop] = useState(false);
  const [audioFilesPlay, setAudioFilesPlay] = useState(false);
  const [audioFilesStop, setAudioFilesStop] = useState(false);
  //   const [audioFilesMute, setAudioFilesMute] = useState(false);
  const audioRef = useRef();
  console.log();

  const isAudioFilePlay = () => {
    const play = audioFilesPlay;
    setAudioFilesPlay(!play);
    TrackArray.forEach((song) => {
      // console.log(song.audio);
      song.audio.play();
    });
    if (play) {
      setAudioFilesPlay(!play);
      TrackArray.forEach((song) => {
        song.audio.pause();
      });
    }
  };

  const isAudioFileStop = () => {
    setAudioFilesPlay(false);
    setAudioFilesStop(true);
    TrackArray.forEach((song) => {
      song.audio.pause();
      song.audio.currentTime = 0;
    });
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
  console.log(audioDuration);
  // const timeClick = () => {
  //   console.log(TrackArray[0].audio.currentTime);
  // };

  return (
    <div>
      <Buttons
        isAudioFilePlay={isAudioFilePlay}
        isAudioFileStop={isAudioFileStop}
        isAudioFileLoop={isAudioFileLoop}
        audioDuration={audioDuration}
        // timeClick={timeClick}
        formatSecondsAsTime={formatSecondsAsTime}
        audioFilesIsLoop={audioFilesIsLoop}
        audioFilesPlay={audioFilesPlay}
      ></Buttons>
    </div>
  );
}

export default Controlers;
