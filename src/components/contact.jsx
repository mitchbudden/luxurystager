import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import '../styles/contact.css';

class Contact extends Component {

  render() {
    return (
      <div>
        <Nav selected="Contact"/>
        <h1 className="contact-info">We are committed to helping you sell your property faster, for more money. 
        Please reach out using any of the methods listed below. </h1>
        <Footer />
      </div>);
  }
}

export default Contact;
