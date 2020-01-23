/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Header from '@components/Header';
import ImageList from '@components/ImageList';
import SectFlamingo from '@components/SectFlamingo';
import Popup from '@components/Popup';
import Footer from '@components/Footer';
import Menu from '@components/Menu';

const App = props => {
  return (
    <div>
      <Menu />
      <Header />
      <ImageList pics={props.statuePics} id="statuePicsId" />
      <SectFlamingo />
      <ImageList pics={props.liveAnimalPics} id="liveAnimalPicsId" />
      <Popup picture={props.fetchedPic} />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  statuePics: state.statuePics,
  liveAnimalPics: state.liveAnimalPics,
  fetchedPic: state.fetchedPic
});

export default connect(mapStateToProps)(App);
