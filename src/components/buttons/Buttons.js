import React from 'react';
// import { FaPlay } from 'react-icons/fa';
import { FaStop } from 'react-icons/fa';
import { MdOutlineLoop } from 'react-icons/md';
import { MdStopCircle } from 'react-icons/md';
import { MdPlayArrow } from 'react-icons/md';
import { MdPlayCircleOutline } from 'react-icons/md';
// import { isAudioFilePlay } from '../controlers/Controlers';

function Buttons({ isAudioFilePlay, isAudioFileStop, isAudioFileLoop }) {
  return (
    <div>
      <button onClick={isAudioFilePlay} className="btn">
        {/* <FaPlay /> */}
        {/* <MdPlayArrow /> */}
        <MdPlayCircleOutline />
      </button>
      <button onClick={isAudioFileStop} className="btn">
        {/* <FaStop /> */}
        <MdStopCircle />
      </button>
      <button onClick={isAudioFileLoop} className="btn">
        <MdOutlineLoop />
      </button>
      <button className="btn">time</button>
    </div>
  );
}

export default Buttons;
