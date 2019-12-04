import React from 'react';
import PictureCard from '@components/PictureCard';
import apePicChimp from '@images/edited_apePicChimp';
import asianElephant from '@images/edited_asianElephant';
import birdBank from '@images/edited_birdBank';
/*
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
import apePicChimp from '@images/edited_apePicChimp';
*/

const pics = [
  { key: 1, src: apePicChimp, text: "Two Caleb's in this picture" },
  { key: 2, src: asianElephant, text: 'Asia elephant exhibit' },
  { key: 3, src: birdBank, text: 'A large bird bank' }
];

const App = () => {
  return (
    <div className="app">
      {pics.map(img => (
        <PictureCard key={img.key} src={img.src} text={img.text} />
      ))}
    </div>
  );
};

export default App;
