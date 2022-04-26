import React from 'react';
import '../audioFile/AudioFile.css';
import { useState } from 'react';
import { FaVolumeMute } from 'react-icons/fa';
import { FaVolumeUp } from 'react-icons/fa';
import { TrackArray } from '../../audioFiles/TrackArray';

function AudioFile({ song }) {
  const [audioFilesMute, setAudioFilesMute] = useState(false);

  const isAudioFileMute = () => {
    let isPlaying = audioFilesMute;
    if (isPlaying) {
      song.audio.play();
      console.log('work');
      setAudioFilesMute(!isPlaying);
    } else {
      setAudioFilesMute(!isPlaying);
      console.log('stop');
      song.audio.pause();
    }
  };

  // const toggleMute = () => {
  //   setIsMute(!isPlaying);
  //   onMute(track.audio);
  // };

  return (
    <div className="audio-file" style={{ backgroundColor: song.color }}>
      <div className="title-button-container">
        <button className="audio-File-button" onClick={isAudioFileMute}>
          {/* <FaVolumeMute /> */}
          {audioFilesMute ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <p className="audio-file-title">{song.name} </p>
      </div>
    </div>
  );
}

export default AudioFile;
