import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import '../styles/contact.css';
import resa from '../images/resa.png'
import ibya from '../images/ibya.png';

class Contact extends Component {

  render() {
    return (
      <div>
        <Nav selected="Contact"/>
        <div className="contact-banner">
          <div className="contact-description-container">
            <h1 className="contact-banner-description">Contact Us</h1>
          </div>
        </div>
        <h1 className="contact-info">We are committed to helping you sell your property faster, for more money. 
        Please reach out using any of the methods listed below. </h1>
        <Footer />
        <div className="cert-group">
          <img src={resa} 
                className="cert-image"
                alt="RESA Certification"/>
          <img src={ibya} 
                className="cert-image"
                alt="IYBA Certification"/>
        </div>
      </div>);
  }
}

export default Contact;
