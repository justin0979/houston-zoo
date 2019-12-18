import React from 'react';
import Header from '@components/Header';
import ImageList from '@components/ImageList';
import SectFlamingo from '@components/SectFlamingo';

import apePicChimp from '@images/edited_apePicChimp';
import asianElephant from '@images/edited_asianElephant';
import lions from '@images/edited_lions';
import meerkats from '@images/edited_meerKat';
import orangutan from '@images/edited_orangutan';
import elephantEating from '@images/edited_elephantEating';
import okapi from '@images/edited_okapi';

import birdBank from '@images/birdBank';
import gorilla2 from '@images/gorillaStatue';
import frogStatue from '@images/edited_frogStatue';
import giraffeStatue from '@images/edited_GiraffeStatue';
import cheetahStatue from '@images/edited_cheetahStatue';
import cobraStatue from '@images/edited_cobraStatue';
import sealStatue from '@images/edited_seal-statue';
import moleStatue from '@images/edited_mole';

const pics = [
  { key: 1, src: apePicChimp, text: 'Twin Calebs?' },
  { key: 2, src: asianElephant, text: 'Asian elephant exhibit' },
  { key: 3, src: elephantEating, text: 'Elephants eating fruit' },
  { key: 5, src: meerkats, text: 'On the lookout' },
  { key: 6, src: lions, text: 'Lounging Lions' },
  { key: 7, src: orangutan, text: 'Relaxing' },
  { key: 8, src: okapi, text: 'Biting the rail' }
];

const picsStatues = [
  { key: 7, src: sealStatue, text: 'Seal' },
  { key: 1, src: cheetahStatue, text: 'Cheetah Statue' },
  { key: 2, src: cobraStatue, text: 'Cobra Statue' },
  { key: 8, src: moleStatue, text: 'Mole' },
  { key: 3, src: giraffeStatue, text: 'Not quite as tall' },
  { key: 4, src: frogStatue, text: 'Frog Statue' },
  { key: 5, src: birdBank, text: 'A large bird bank' },
  { key: 6, src: gorilla2, text: 'Gorilla Statue' }
];

const App = () => {
  return (
    <div>
      <Header />
      <ImageList pics={picsStatues} />
      <SectFlamingo />
      <ImageList pics={pics} />
    </div>
  );
};

export default App;
