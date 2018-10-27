import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import './about.css';

class About extends Component {

  render() {
    return (
      <div>
        <Nav selected="About"/>
        <h1 className="about-description">This is some information about Luxe Staging. This paragraph is just a nonsense
          that I'm using to format the page. This website was made by Mitch Budden. It is for
          the company Luxe Staging which is for homes and yachts in floria.
        </h1>
        <Footer />
      </div>
      );
  }
}

export default About;
