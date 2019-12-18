import React, { useState, useEffect } from 'react';

const PictureCard = props => {
  const [spans, setSpans] = useState(0);

  const imageRef = React.createRef();

  const calcSpans = () => {
    const height = imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 10);

    setSpans(spans);
  };

  useEffect(() => {
    imageRef.current.addEventListener('load', calcSpans);
  }, []);

  return (
    <div className="card" style={{ gridRowEnd: `span ${spans}` }}>
      <figure className="card__side card__side--front">
        <img ref={imageRef} src={props.src} alt={props.text} />
        <h2>{props.text}</h2>
      </figure>
    </div>
  );
};

export default PictureCard;
