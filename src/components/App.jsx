import React from 'react';
import PictureCard from '@components/PictureCard';
import apePicChimp from '@images/edited_apePicChimp';

const App = () => {
  return (
    <div className="app">
      <PictureCard src={apePicChimp} text="Taking time to be an ape" />
      <PictureCard src={apePicChimp} text="From App" />
      <PictureCard src={apePicChimp} text="From App" />
      <PictureCard src={apePicChimp} text="From App" />
      <PictureCard src={apePicChimp} text="From App" />
      <PictureCard src={apePicChimp} text="From App" />
      <PictureCard src={apePicChimp} text="From App" />
      <PictureCard src={apePicChimp} text="From App" />
      <PictureCard src={apePicChimp} text="From App" />
      <PictureCard src={apePicChimp} text="From App" />
    </div>
  );
};

export default App;
