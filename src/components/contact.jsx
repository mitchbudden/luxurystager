import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import '../styles/contact.css';

class Contact extends Component {

  render() {
    return (
      <div>
        <Nav selected="Contact"/>
        <h1 className="contact-info">We want to work with you to sell your home or yacht. 
          <br/>Please reach out using any of the methods listed below.</h1>
        <Footer />
      </div>);
  }
}

export default Contact;
