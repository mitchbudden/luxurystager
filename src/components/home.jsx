import React, { Component } from "react";
import Nav from './nav';
import Footer from './footer';
import './home.css';

class Home extends Component {

  render() {
    return (
      <div>
        <Nav selected="Homes"/>
        <div className="homes-banner">
          <div className="homes-description-container">
            <h1 className="homes-banner-description">Stage It - Sell It</h1>
          </div>
        </div>
        <div className="home-page-container">
          <div className="home-picture-group">
            <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5952432c3b70cfedf523282f5895f009&auto=format&fit=crop&w=500&q=60" 
                className="display-image"
                alt="before"/>
            <img src="https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5631d58afa6fa483935e464b52248995&auto=format&fit=crop&w=500&q=60" 
                className="display-image"
                alt="after"/>
          </div>
          <div className="home-picture-group">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7eb3cf84fa5988885f62b3ee0dfac1fe&auto=format&fit=crop&w=500&q=60" 
                className="display-image"
                alt="before"/>
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ba2b9dcc1af593a7d93ed9b4ed952ac&auto=format&fit=crop&w=500&q=60" 
                className="display-image"
                alt="after"/>
          </div>
        </div>
        <Footer />
      </div>);
  }
}

export default Home;
