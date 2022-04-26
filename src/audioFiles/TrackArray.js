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
  { audio: new Audio(Alltrack), name: 'All Track', color: '#facfd2' },
  { audio: new Audio(Bvoc), name: 'Bvoc', color: '#6EE7B7' },
  { audio: new Audio(Drums), name: 'Drums', color: '#rCASAS' },
  { audio: new Audio(Hehevoc), name: 'Hehe Voc', color: '#E1EFF6' },
  { audio: new Audio(Highvoc), name: 'High Voc', color: '#0A804' },
  { audio: new Audio(Jibrish), name: 'Jibrish', color: '#F9A8D4' },
  { audio: new Audio(Lead), name: 'Lead', color: '#8B5CF6' },
  { audio: new Audio(Tambourine), name: 'Tambourine', color: '#82DEF4' },
  { audio: new Audio(Uuhovoc), name: 'Uuho Voc', color: '#80FFE8' },
];
