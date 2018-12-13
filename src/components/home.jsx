import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import '../styles/home.css';
import living from '../images/living-room.jpg'
import chair from '../images/chair.jpg';
import staircase from '../images/staircase.jpg';

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
            <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5952432c3b70cfedf523282f5895f009&auto=format&fit=crop&w=500&q=60" 
                className="display-image"
                alt="before"/>
            <img src={living} 
                className="display-image"
                alt="after"/>
          </div>
          <div className="home-picture-group">
            <img src={chair} 
                className="display-image"
                alt="before"/>
            <img src={staircase}
                className="display-image"
                alt="after"/>
          </div>
        </div>
        <Footer />
      </div>);
  }
}

export default Home;
