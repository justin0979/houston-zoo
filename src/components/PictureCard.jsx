/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPic, fetchOriginalPic, fetchId } from '@actions';

const PictureCard = props => {
  const [spans, setSpans] = useState(0);
  const [minHeight, setMinHeight] = useState(0);

  const imageRef = React.createRef();

  const calcSpans = () => {
    const height = imageRef.current.clientHeight;
    if (height > minHeight) {
      setMinHeight(height);
    }

    const spans = Math.ceil(height / 10 + 13);

    setSpans(spans);
  };

  useEffect(() => {
    imageRef.current.addEventListener('load', calcSpans);
  }, []);

  return (
    <div
      className="card"
      style={{ minHeight: `${minHeight}`, gridRowEnd: `span ${spans}` }}
    >
      <figure className="card__side card__side--front" id={props.id}>
        <img ref={imageRef} src={props.src} alt={props.text} className="pic" />
        <a
          href="#popup"
          alt="Popup Info"
          className="anchor anchor__btn"
          // use connect instead of below
          onClick={() => {
            props.fetchPic(props.src);
            props.fetchOriginalPic(props.originalPic);
            props.fetchId(props.id);
          }}
        >
          <h2>{props.text}</h2>
        </a>
      </figure>
    </div>
  );
};

export default connect(null, { fetchOriginalPic, fetchPic, fetchId })(
  PictureCard
);
