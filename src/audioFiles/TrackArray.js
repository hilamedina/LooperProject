import Alltrack from '../audioFiles/ALLTRACK.mp3';
import Bvoc from '../audioFiles/BVOC.mp3';
import Drums from '../audioFiles/DRUMS.mp3';
import Hehevoc from '../audioFiles/HEHEVOC.mp3';
import Highvoc from '../audioFiles/HIGHVOC.mp3';
import Jibrish from '../audioFiles/JIBRISH.mp3';
import Lead from '../audioFiles/LEAD.mp3';
import Tambourine from '../audioFiles/TAMBOURINE.mp3';
import Uuhovoc from '../audioFiles/UUHOVOC.mp3';

export const TrackArray = [
  { audio: new Audio(Alltrack), name: 'All Track', color: '#046dc8' },
  { audio: new Audio(Bvoc), name: 'Bvoc', color: '#1184a7' },
  { audio: new Audio(Drums), name: 'Drums', color: '#15a2a2' },
  { audio: new Audio(Hehevoc), name: 'Hehe Voc', color: '#6fb1a0' },
  { audio: new Audio(Highvoc), name: 'High Voc', color: '#B4418E' },
  { audio: new Audio(Jibrish), name: 'Jibrish', color: '#D94A8c' },
  { audio: new Audio(Lead), name: 'Lead', color: '#EA5157' },
  { audio: new Audio(Tambourine), name: 'Tambourine', color: '#FE7434' },
  { audio: new Audio(Uuhovoc), name: 'Uuho Voc', color: '#FEA802' },
];
