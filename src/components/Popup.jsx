/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { connect } from 'react-redux';

const Popup = props => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <img src={props.fetchedPic} alt="zoo pics" />
        <a href={`#${props.fetchedId}`} alt="Images" className="popup__close">
          Close
        </a>
        <img src={props.fetchedOriginalPic} alt="zoo pics" />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  fetchedPic: state.fetchedPic,
  fetchedId: state.fetchedId,
  fetchedOriginalPic: state.fetchedOriginalPic
});

export default connect(mapStateToProps)(Popup);
