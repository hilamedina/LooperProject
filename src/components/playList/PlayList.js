import React from 'react';
import { TrackArray } from '../../audioFiles/TrackArray';
//with default i dont need the {}
import '../playList/PlayList.css';
import AudioFile from '../audioFile/AudioFile';
import Buttons from '../buttons/Buttons';
import Controlers from '../controlers/Controlers';
import '../playList/PlayList.css';

function PlayList() {
  const toggle = (song) => {
    song.muted = !song.muted;
  };
  return (
    <div className="PlayList">
      <ul className="song_containers">
        {TrackArray.map((song, index) => (
          <li className="song" key={index}>
            <AudioFile song={song} index={index} toggle={toggle} />
          </li>
        ))}
      </ul>
      <Controlers></Controlers>
    </div>
  );
}

export default PlayList;
