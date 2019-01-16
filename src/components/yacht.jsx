import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import '../styles/yacht.css';
import yachtBeforeOne from '../images/luxe/yacht-before-1.jpeg';
import yachtAfterOne from '../images/luxe/yacht-after-1.jpeg';
import yachtZoom from '../images/luxe/yacht-zoom-1.jpeg';

class Yacht extends Component {

  render() {
    return (
      <div>
        <Nav selected="Yachts"/>
        <div className="yachts-banner">
          <div className="yachts-description-container">
            <h1 className="homes-banner-description">Luxe Staging</h1>
            <h1 className="yachts-banner-description">Stage It - Sell It</h1>
          </div>
        </div>
        <div className="yacht-page-container">
          <div className="yacht-picture-group">
            <div className="image-title-group">
              <h2 className="yacht-image-title">After</h2>
              <img src={yachtBeforeOne}
                  className="display-image"
                  alt="before"/>
            </div>
            <div className="image-title-group">
              <h2 className="yacht-image-title">Before</h2>              
              <img src={yachtAfterOne}
                  className="display-image"
                  alt="after"/>
            </div>
          </div>
          <div className="yacht-picture-group">
            <div className="image-title-group">
              <h2 className="yacht-image-title">After</h2>              
              <img src={yachtZoom}
                  className="display-image"
                  alt="before"/>
            </div>
          </div>
        </div>
        <Footer />
      </div>);
  }
}

export default Yacht;
