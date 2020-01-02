/* eslint-disable react/display-name */
import React from 'react';

export default props => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <a
          href="javascript:history.back()"
          alt="Images"
          className="popup__close"
        >
          Close
        </a>
      </div>
    </div>
  );
};
