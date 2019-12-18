import React from 'react';
import Header from '@components/Header';
import ImageList from '@components/ImageList';
import SectFlamingo from '@components/SectFlamingo';
import apePicChimp from '@images/edited_apePicChimp';
import asianElephant from '@images/edited_asianElephant';
import birdBank from '@images/birdBank';
import gorilla2 from '@images/gorillaStatue';
import cheetahStatue from '@images/edited_cheetahStatue';
import cobraStatue from '@images/edited_cobraStatue';
import elephantEating from '@images/edited_elephantEating';
import frogStatue from '@images/edited_frogStatue';
import giraffeStatue from '@images/edited_GiraffeStatue';
import lions from '@images/edited_lions';
import meerkats from '@images/edited_meerKat';

const pics = [
  { key: 1, src: apePicChimp, text: 'Twin Calebs?' },
  { key: 2, src: asianElephant, text: 'Asian elephant exhibit' },
  { key: 3, src: elephantEating, text: 'Elephants eating fruit' },
  { key: 4, src: gorilla2, text: 'Gorilla Statue' },
  { key: 5, src: meerkats, text: 'On the lookout' },
  { key: 6, src: lions, text: 'Lounging Lions' }
];

const pics2 = [
  { key: 1, src: cheetahStatue, text: 'Cheetah Statue' },
  { key: 2, src: cobraStatue, text: 'Cobra Statue' },
  { key: 3, src: giraffeStatue, text: 'Not quite as tall' },
  { key: 4, src: frogStatue, text: 'Frog Statue' },
  { key: 5, src: birdBank, text: 'A large bird bank' }
];

const App = () => {
  return (
    <div>
      <Header />
      <ImageList pics={pics} />
      <SectFlamingo />
      <ImageList pics={pics2} />
    </div>
  );
};

export default App;
