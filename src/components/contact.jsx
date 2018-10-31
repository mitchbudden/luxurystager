import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';

class Contact extends Component {

  render() {
    return (
      <div>
        <Nav selected="Contact"/>
        <Footer />
      </div>);
  }
}

export default Contact;
