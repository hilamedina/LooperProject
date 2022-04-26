import React from 'react';
import '../audioFile/AudioFile.css';
import { FaVolumeMute } from 'react-icons/fa';

function AudioFile({ song }) {
  return (
    <div className="audio-file" style={{ backgroundColor: song.color }}>
      <div className="title-button-container">
        <button className="audio-File-button">
          <FaVolumeMute />
        </button>
        <p className="audio-file-title">{song.name} </p>
      </div>
      {/* <div
        className="audio-File-container"
        style={{ backgroundColor: song.color }}
      ></div> */}
    </div>
  );
}

export default AudioFile;
