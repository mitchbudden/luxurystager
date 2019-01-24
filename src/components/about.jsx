import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import '../styles/about.css';
import carolynPhoto from '../images/carolyn.jpeg';

class About extends Component {

  render() {
    return (
      <div>
        <Nav selected="About"/>
        <div className="about-banner">
          <div className="about-description-container">
            <h1 className="homes-banner-description">Luxe Staging</h1>
            <h1 className="yachts-banner-description">Stage It - Sell It</h1>
          </div>
        </div>
        <div className="text-group">
          <img className="head-photo" src={carolynPhoto} alt="Carolyn Birger"/>
          <ul>
            <li className="about-description">Carolyn Birger, President of Luxe Staging, is a certified staging professional, a member of the International Yacht Brokers Association, as well as the Real Estate Staging Association.</li>
            <li className="about-description">Our goal is to assist brokers by transforming interiors and exterieros to reflect a warm, fresh environment that buyers will want to experience.</li>
            <li className="about-description"> At Luxe Staging, we help owners transform their properties to stand out from others by drawing attention to the fine craftsmanship and décor of the property.</li>
            <li className="about-description"> It is proven that when staged properly, it will sell 83% faster and the seller will receive an average of 20% more money.</li>
            <li className="about-description">Luxe Staging will redesign interiors with existing furnishings, artwork and accessories to highlight the yachts architecture, OR we will bring in our own inventory to set the stage for a quick sale.  The longer a home or yacht is listed for sale, the less money received.</li>
          </ul>
        </div>
        <div className="text-group">
          <h1 className="about-description-bold">Our Services:</h1>
          <div className="services-flex">
            <div className="services-group">
              <h1 className="services-description services-bold">DIY Consult</h1>
              <h1 className="services-description">Consultations are designed to give the owners all the information they need to stage their home or yacht themselves.</h1>
            </div>
            <div className="services-group">
              <h1 className="services-description services-bold">Lived In Staging</h1>
              <h1 className="services-description">Owners live in the property for sale. Luxe will rearrange what is there.</h1>
            </div>
            <div className="services-group">
              <h1 className="services-description services-bold">Vacant Staging</h1>
              <h1 className="services-description">The yacht or home is empty and Luxe will provide furniture and accessories.</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      );
  }
}

export default About;
