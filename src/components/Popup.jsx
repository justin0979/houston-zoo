/* eslint-disable react/display-name */
import React from 'react';

export default props => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <img src={props.picture} alt="zoo pics" />
        <a href="#" alt="Images" className="popup__close">
          Close
        </a>
      </div>
    </div>
  );
};
