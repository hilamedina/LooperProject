import React from 'react';
import { TrackArray } from '../../constant/TrackArray';
//with default i dont need the {}
import '../playList/PlayList.css';
import AudioFile from '../audioFile/AudioFile';
import Buttons from '../buttons/Buttons';

function PlayList() {
  return (
    <div className="PlayList">
      <ul className="song_containers">
        {TrackArray.map((song, index) => (
          <li className="song" key={index}>
            <AudioFile song={song} />
          </li>
        ))}
      </ul>
      <Buttons></Buttons>
    </div>
  );
}

export default PlayList;
