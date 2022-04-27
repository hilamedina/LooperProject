import React from 'react';
import '../audioFile/AudioFile.css';
import { useState } from 'react';
import { FaVolumeMute } from 'react-icons/fa';
import { FaVolumeUp } from 'react-icons/fa';

function AudioFile({ song, index, toggle }) {
  const [audioFilesMute, setAudioFilesMute] = useState(false);

  const mute = () => {
    isAudioFileMute();
    setAudioFilesMute(() => !audioFilesMute);
    toggle(song.audio);
  };

  const isAudioFileMute = () => {
    let isPlaying = audioFilesMute;
    if (isPlaying) {
      console.log('work');
      setAudioFilesMute(!isPlaying);
    } else {
      setAudioFilesMute(!isPlaying);
      console.log('stop');
    }
  };

  return (
    <>
      <div className="audio-file" style={{ backgroundColor: song.color }}>
        <div className="title-button-container">
          <button className="audio-File-button" onClick={mute}>
            {audioFilesMute ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <p className="audio-file-title">{song.name} </p>
        </div>
      </div>
    </>
  );
}

export default AudioFile;
