import './App.css';
import DRUM from '../src/audioFiles/DRUMS.mp3';
import ALL from '../src/audioFiles/ALLTRACK.mp3';
import BVOC from '../src/audioFiles/BVOC.mp3';
import HEHEHE from '../src/audioFiles/BVOC.mp3';
import Songs from './components/songs/Songs';
import { useState, useEffect } from 'react';
import PlayList from './components/playList/PlayList';

function App() {
  const audioAll = new Audio(ALL);
  const audioDrum = new Audio(DRUM);
  // const audioBVOC = new Audio(BVOC);
  // const audioHEHEHE = new Audio(HEHEHE);

  return (
    <>
      <PlayList></PlayList>
      {/* <div className="songs-container"> */}
      {/* {audioAll && <Songs nameOfAudio={audioAll}></Songs>} */}
      {/* {audioDrum && <Songs name={audioDrum}></Songs>} */}
      {/* {audioBVOC && <Songs nameOfAudio={audioBVOC}></Songs>}  */}
      {/* {audioHEHEHE && <Songs nameOfAudio={audioHEHEHE}></Songs>} */}
      {/* {audio && <Songs nameOf={audio}></Songs>} */}
      {/* </div> */}
    </>
  );
}
export default App;
