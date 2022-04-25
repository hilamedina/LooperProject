import React from 'react';
import '../audioFile/AudioFile.css';

function AudioFile({ song }) {
  return (
    <div className="audio-file">
      <div
        className="audio-File-container"
        style={{ backgroundColor: song.color }}
      ></div>
      <p className="audio-file-title">{song.name} </p>
      <button className="audio-File-botton">mute</button>
    </div>
  );
}

export default AudioFile;
