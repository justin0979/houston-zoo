import React from 'react';
import PictureCard from '@components/PictureCard';

const ImageList = ({ pics }) => {
  return (
    <div className="imageList">
      {pics.map(img => (
        <PictureCard key={img.key} src={img.src} text={img.text} />
      ))}
    </div>
  );
};

export default ImageList;
