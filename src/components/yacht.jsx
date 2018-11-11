import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import '../styles/yacht.css';

class Yacht extends Component {

  render() {
    return (
      <div>
        <Nav selected="Yachts"/>
        <div className="yachts-banner">
          <div className="yachts-description-container">
            <h1 className="homes-banner-description">Luxe Staging LLC</h1>
            <h1 className="yachts-banner-description">Stage It - Sell It</h1>
          </div>
        </div>
        <div className="yacht-page-container">
          <div className="yacht-picture-group">
            <img src="http://www.yachtinteriorsociety.com/uploads/1/0/9/5/109521393/gt50-interior-yacht-interior-society_orig.jpg" 
                className="display-image"
                alt="before"/>
            <img src="https://nautique.tv/wp-content/uploads/2015/08/sws-102-interior-2015-2.jpg" 
                className="display-image"
                alt="after"/>
          </div>
          <div className="yacht-picture-group">
            <img src="http://newyachtinteriors.com/wp-content/uploads/2017/03/Princess-64-Yacht-Interior-Design-03.jpg" 
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
