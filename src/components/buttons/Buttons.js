import React from 'react';

// import { isAudioFilePlay } from '../controlers/Controlers';

function Buttons({ isAudioFilePlay, isAudioFileStop, isAudioFileLoop }) {
  return (
    <div>
      <button onClick={isAudioFilePlay} className="btn">
        play
      </button>
      <button onClick={isAudioFileStop} className="btn">
        stop
      </button>
      <button onClick={isAudioFileLoop} className="btn">
        loop
      </button>
      <button className="btn">time</button>
    </div>
  );
}

export default Buttons;
