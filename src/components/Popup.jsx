/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { connect } from "react-redux";

const Popup = (props) => {
  return (
    <a href={`#${props.fetchedId}`}>
      <div className="popup" id="popup">
        <div className="popup__content">
          <img
            className="popup__content--pic"
            src={props.fetchedPic}
            alt="zoo pics"
          />
          <img
            className="popup__content--pic"
            src={props.fetchedOriginalPic}
            alt="zoo pics"
          />
        </div>
      </div>
    </a>
  );
};

const mapStateToProps = (state) => ({
  fetchedPic: state.fetchedPic,
  fetchedId: state.fetchedId,
  fetchedOriginalPic: state.fetchedOriginalPic,
});

export default connect(mapStateToProps)(Popup);
