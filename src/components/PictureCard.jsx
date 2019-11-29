import React from 'react';

const PictureCard = props => {
  return (
    <div className="picturecard">
      <figure>
        <img src={props.src} alt={props.text} />
        <h2>Picture Details</h2>
      </figure>
    </div>
  );
};

export default PictureCard;
