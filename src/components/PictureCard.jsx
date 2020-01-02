import React, { useState, useEffect } from 'react';

const PictureCard = props => {
  const [spans, setSpans] = useState(0);

  const imageRef = React.createRef();

  const calcSpans = () => {
    const height = imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 13);

    setSpans(spans);
  };

  useEffect(() => {
    imageRef.current.addEventListener('load', calcSpans);
  }, []);

  return (
    <div className="card" style={{ gridRowEnd: `span ${spans}` }}>
      <figure className="card__side card__side--front" id={props.id}>
        <img ref={imageRef} src={props.src} alt={props.text} />
        <a href="#popup" alt="Popup Info" className="anchor anchor__btn">
          <h2>{props.text}</h2>
        </a>
      </figure>
    </div>
  );
};

export default PictureCard;
