import React, { useState } from 'react';

const PictureCard = props => {
  const [scale, setScale] = useState({ transform: 'scale(1)' });

  return (
    <div className="picturecard">
      <figure>
        <img src={props.src} alt={props.text} style={scale} />
        <h2>{props.text}</h2>
        <button
          onClick={() => {
            if (scale.transform === 'scale(1)')
              setScale({
                transform: 'scale(3)',
                position: 'absolute',
                zIndex: '2',
                top: '50%',
                left: '50%'
              });
            else {
              setScale({ transform: 'scale(1)' });
            }
          }}
        >
          Click
        </button>
      </figure>
    </div>
  );
};

export default PictureCard;
