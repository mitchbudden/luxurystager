import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import './home.css';

class Yacht extends Component {

  render() {
    return (
      <div>
        <Nav selected="Yachts"/>
        <div className="home-page-container">
          <div className="home-picture-group">
            <img src="https://images.unsplash.com/photo-1535024966840-e7424dc2635b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=80653ca536107e70be9eeefd3f0bb912&auto=format&fit=crop&w=633&q=80" 
                className="display-image"
                alt="before"/>
            <img src="https://images.unsplash.com/photo-1495279957139-3a9a3773ea4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebf56fc316f62522c610b73c722fd3df&auto=format&fit=crop&w=700&q=80" 
                className="display-image"
                alt="after"/>
          </div>
          <div className="home-picture-group">
            <img src="https://images.unsplash.com/photo-1503200653465-b0a95c5c9816?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e34cc8c8904d2e6131d281f2939ffa87&auto=format&fit=crop&w=1350&q=80" 
                className="display-image"
                alt="before"/>
            <img src="https://images.unsplash.com/photo-1534232566443-dda0b5043f47?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a977709880bc6bdd984de69b376ed90f&auto=format&fit=crop&w=968&q=80" 
                className="display-image"
                alt="after"/>
          </div>
        </div>
        <Footer />
      </div>);
  }
}

export default Yacht;
