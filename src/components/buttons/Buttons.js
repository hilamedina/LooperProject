import React from 'react';
import { MdOutlineLoop } from 'react-icons/md';
import { MdStopCircle } from 'react-icons/md';
import { MdPlayCircleOutline } from 'react-icons/md';
import { MdPauseCircleOutline } from 'react-icons/md';
import '../buttons/Buttons.css';

function Buttons({
  audioFilesCurrentTime,
  isAudioFilePlay,
  isAudioFileStop,
  isAudioFileLoop,
  audioFilesIsLoop,
  audioFilesPlay,
  formatSecondsAsTime,
  timeClick,
  audioDuration,
}) {
  return (
    <div className="Buttons">
      <button onClick={isAudioFilePlay} className="btn">
        {audioFilesPlay ? <MdPauseCircleOutline /> : <MdPlayCircleOutline />}
      </button>
      <button onClick={isAudioFileStop} className="btn">
        <MdStopCircle />
      </button>
      <button
        onClick={isAudioFileLoop}
        className={
          audioFilesIsLoop ? ' btn btn-not-loop' : ' btn btn-loop-work'
        }
      >
        <MdOutlineLoop />
      </button>
      <button className="btn" onClick={timeClick}>
        <p>
          {formatSecondsAsTime(audioFilesCurrentTime).includes('NaN')
            ? '00:00'
            : formatSecondsAsTime(audioFilesCurrentTime)}
        </p>
      </button>
    </div>
  );
}
export default Buttons;
