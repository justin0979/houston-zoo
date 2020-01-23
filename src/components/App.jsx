/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Header from '@components/Header';
import ImageList from '@components/ImageList';
import SectFlamingo from '@components/SectFlamingo';
import Popup from '@components/Popup';
import Footer from '@components/Footer';

class App extends React.Component {
  getPicture = pic => {
    return pic;
  };

  render() {
    return (
      <div>
        <Header />
        <ImageList pics={this.props.statuePics} />
        <SectFlamingo />
        <ImageList pics={this.props.liveAnimalPics} />
        <Popup picture={this.props.fetchedPic} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  statuePics: state.statuePics,
  liveAnimalPics: state.liveAnimalPics,
  fetchedPic: state.fetchedPic
});

export default connect(mapStateToProps)(App);
