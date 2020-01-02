/* eslint-disable react/prop-types */
import React from 'react';
import PictureCard from '@components/PictureCard';

const ImageList = ({ pics }) => {
  return (
    <section className="imageList">
      {pics.map(img => (
        <PictureCard key={img.id} src={img.src} text={img.text} id={img.id} />
      ))}
    </section>
  );
};

export default ImageList;
