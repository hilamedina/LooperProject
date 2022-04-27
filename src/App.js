import './App.css';
// import DRUM from '../src/audioFiles/DRUMS.mp3';
// import ALL from '../src/audioFiles/ALLTRACK.mp3';
// import BVOC from '../src/audioFiles/BVOC.mp3';
// import HEHEHE from '../src/audioFiles/BVOC.mp3';
// import Songs from './components/songs/Songs';
// import { useState, useEffect } from 'react';
import PlayList from './components/playList/PlayList';

function App() {
  return (
    <>
      <header className="header">Loop Machine</header>
      <PlayList></PlayList>
    </>
  );
}
export default App;
