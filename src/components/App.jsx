import React, { useState } from 'react';
import Header from '@components/Header';
import ImageList from '@components/ImageList';
import SectFlamingo from '@components/SectFlamingo';
import Popup from '@components/Popup';
import Footer from '@components/Footer';

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
  { id: 'pics1', src: apePicChimp, text: 'Twin Calebs?' },
  { id: 'pics2', src: asianElephant, text: 'Asian elephant exhibit' },
  { id: 'pics3', src: elephantEating, text: 'Elephants eating fruit' },
  { id: 'pics5', src: meerkats, text: 'On the lookout' },
  { id: 'pics6', src: lions, text: 'Lounging Lions' },
  { id: 'pics7', src: orangutan, text: 'Relaxing' },
  { id: 'pics8', src: okapi, text: 'Biting the rail' }
];

const picsStatues = [
  { id: 'picsStatues1', src: sealStatue, text: 'Seal' },
  { id: 'picsStatues2', src: cheetahStatue, text: 'Cheetah Statue' },
  { id: 'picsStatues3', src: gorilla2, text: 'Gorilla Statue' },
  { id: 'picsStatues4', src: cobraStatue, text: 'Cobra Statue' },
  { id: 'picsStatues5', src: moleStatue, text: 'Mole' },
  { id: 'picsStatues6', src: giraffeStatue, text: 'Not quite as tall' },
  { id: 'picsStatues7', src: frogStatue, text: 'Frog Statue' },
  { id: 'picsStatues8', src: birdBank, text: 'A large bird bank' }
];

const getPicture = pic => {
  return pic;
};

const App = () => {
  const [picture, setPicture] = useState(apePicChimp);

  return (
    <div>
      <Header />
      <ImageList pics={picsStatues} getPicture={() => setPicture(getPicture)} />
      <SectFlamingo />
      <ImageList pics={pics} />
      <Popup picture={picture} />
      <Footer />
    </div>
  );
};

export default App;
