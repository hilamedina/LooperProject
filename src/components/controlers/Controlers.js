import React from 'react';
import { useState, useEffect } from 'react';
import { TrackArray } from '../../audioFiles/TrackArray';
import Buttons from '../buttons/Buttons';

function Controlers({}) {
  const [audioFilesIsLoop, setAudioFilesIsLoop] = useState(false);
  const [audioFilesPlay, setAudioFilesPlay] = useState(false);
  const [audioFilesStop, setAudioFilesStop] = useState(false);

  const isAudioFilePlay = () => {
    const play = audioFilesPlay;
    //x=5=y
    //x=6 || y!=6
    setAudioFilesPlay(!play);
    TrackArray.forEach((song) => {
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

  return (
    <div>
      <Buttons
        isAudioFilePlay={isAudioFilePlay}
        isAudioFileStop={isAudioFileStop}
        isAudioFileLoop={isAudioFileLoop}
      ></Buttons>
    </div>
  );
}

export default Controlers;
