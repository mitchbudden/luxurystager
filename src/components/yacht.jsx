import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import '../styles/yacht.css';
import yachtOne from '../images/yacht-1.jpg';
import yachtTwo from '../images/yacht-2.jpg';
import yachtThree from '../images/yacht-3.jpg';

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
            <img src={yachtOne}
                className="display-image"
                alt="before"/>
            <img src={yachtTwo}
                className="display-image"
                alt="after"/>
          </div>
          <div className="yacht-picture-group">
            <img src={yachtThree}
                className="display-image"
                alt="before"/>
            <img src="https://www.superyachtfan.com/wpimages/wp4161f6fa_01_1a.jpg"  
                className="display-image"
                alt="after"/>
          </div>
        </div>
        <Footer />
      </div>);
  }
}

export default Yacht;
