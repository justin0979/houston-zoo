import React, { useState } from 'react';

const PictureCard = props => {
  return (
    <div className="picturecard">
      <figure>
        <img src={props.src} alt={props.text} />
        <h2>{props.text}</h2>
      </figure>
    </div>
  );
};

export default PictureCard;
