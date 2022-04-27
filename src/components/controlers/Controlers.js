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
  // const [audioFilesCurrentTime, setAudioFilesCurrentTime] = useState(0);
  const sliderBar = useRef();
  const requestRef = useRef();

  const audioDuration = Math.floor(TrackArray[0].audio.duration);
  useEffect(() => {
    const trackTime = audioDuration;
    setDuration(trackTime);
    sliderBar.current.max = trackTime;
  }, [audioDuration]);

  // useEffect(() => {
  //   if (audioFilesCurrentTime === 17 && TrackArray[0].audio.loop === false) {
  //     setAudioFilesPlay(false);
  //   }
  // }, [audioFilesCurrentTime]);

  let timerId = 0;
  const startCountingTime = () => {
    console.log(Math.floor(TrackArray[0].audio.currentTime));
    timerId = setInterval(() => setCorrectTime(), 1000);
    console.log('start timer');
  };

  const setCorrectTime = () => {
    setAudioFilesCurrentTime(Math.floor(TrackArray[0].audio.currentTime));
  };

  const isAudioFilePlay = () => {
    console.log('changing play value old value=' + audioFilesPlay);
    // const prevstate = audioFilesPlay;
    const play = audioFilesPlay; //play =false, audioFilesPlay=false
    setAudioFilesPlay(!play); //play =false, audioFilesPlay=true       after
    // console.log('is it true ?' + audioFilesPlay);
    if (!play) {
      startCountingTime();
      TrackArray.forEach((song) => {
        song.audio.play();
        console.log('hila');
        requestRef.current = requestAnimationFrame(rangePlay);
      });
    } else {
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
    });
    console.log('clear interval');
    clearInterval(timerId);
    TrackArray[0].audio.currentTime = 0;
  };
  const isAudioFileLoop = () => {
    const loop = audioFilesIsLoop; // loop =false state= false
    setAudioFilesIsLoop(!loop); // loop =false state = true
    console.log(audioFilesIsLoop, 'state');
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
    requestRef.current = requestAnimationFrame(rangePlay);
  };

  return (
    <div>
      <input
        // className="range-bar"
        // className={audioFilesPlay ? 'slider' : 'paused'}
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
