import React from 'react';
import Drums from '../../audioFiles/DRUMS.mp3';
import AllTrack from '../../audioFiles/ALLTRACK.mp3';
import { useState, useEffect } from 'react';
import '../songs/Song.css';

function Songs({ nameOfAudio }) {
  const [playInLoop, setPlayInLoop] = useState(false);

  useEffect(() => {
    nameOfAudio.load();
  }, []);

  useEffect(() => {
    nameOfAudio.loop = playInLoop;
  }, [playInLoop]);

  const playSound = () => {
    nameOfAudio.play();
    console.log(nameOfAudio);
  };

  const pauseSound = () => {
    nameOfAudio.pause();
    console.log(nameOfAudio);
  };

  const stopSound = () => {
    nameOfAudio.pause();
    nameOfAudio.currentTime = 0; // to check
  };

  return (
    <div className="Song">
      <div>
        <button
          className="hila"
          onClick={() => {
            playSound();
            pauseSound();
          }}
        >
          I'm a button
        </button>
      </div>
      <input
        style={{ backgroundColor: 'yellow' }}
        type="button"
        className="btn btn-primary mr-2"
        value="Play"
        onClick={playSound}
      ></input>

      <input
        type="button"
        className="btn btn-warning mr-2"
        value="Pause"
        onClick={pauseSound}
      ></input>
      <input
        type="button"
        className="btn btn-danger mr-2"
        value="Stop"
        onClick={stopSound}
      ></input>

      <label>
        <input
          type="checkbox"
          checked={playInLoop}
          onChange={(e) => setPlayInLoop(e.target.checked)}
        />
        Play in Loop
      </label>
    </div>
  );
}

export default Songs;
