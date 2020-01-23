/* eslint-disable react/prop-types */
import React from 'react';
import PictureCard from '@components/PictureCard';

const ImageList = ({ pics, id }) => {
  return (
    <section className="imageList" id={id}>
      {pics.map(img => (
        <PictureCard
          key={img.id}
          src={img.src}
          text={img.text}
          id={img.id}
          originalPic={img.originalPic}
        />
      ))}
    </section>
  );
};

export default ImageList;
