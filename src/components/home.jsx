import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import '../styles/home.css';
import homeBeforeOne from '../images/luxe/home-before-1.jpeg';
import homeBeforeTwo from '../images/luxe/home-before-2.jpeg';
import homeBeforeThree from '../images/luxe/home-before-3.jpeg';
import homeAfterOne from '../images/luxe/home-after-1.jpeg';
import homeAfterTwo from '../images/luxe/home-after-2.jpeg';
import homeAfterThree from '../images/luxe/home-after-3.jpeg';

class Home extends Component {

  render() {
    return (
      <div>
        <Nav selected="Homes"/>
        <div className="homes-banner">
          <div className="homes-description-container">
            <h1 className="homes-banner-description">Luxe Staging</h1>            
            <h1 className="homes-banner-description">Stage It - Sell It</h1>
          </div>
        </div>
        <div className="home-page-container">
          <div className="home-picture-group">
            <img src={homeBeforeThree} 
                className="display-image"
                alt="before"/>
            <img src={homeAfterThree} 
                className="display-image"
                alt="after"/>
          </div>
          <div className="home-picture-group">
            <img src={homeBeforeTwo} 
                className="display-image"
                alt="before"/>
            <img src={homeAfterTwo}
                className="display-image"
                alt="after"/>
          </div>
          <div className="home-picture-group">
            <img src={homeBeforeOne} 
                className="display-image"
                alt="before"/>
            <img src={homeAfterOne}
                className="display-image"
                alt="after"/>
          </div>
        </div>
        <Footer />
      </div>);
  }
}

export default Home;
