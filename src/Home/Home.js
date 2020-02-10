import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return <div className="container">Pick a route my dude
        <div>
          <Link to="/grow-dots">Grow Dots</Link>
          <Link to="/tictactoe">tictactoe</Link>
          <Link to="/carousel-slider">carousel-slider</Link>
          <Link to="/speedometer">speedometer</Link>
          <Link to="/van-life">van-life</Link>
          <Link to="/basic-store">basic-store</Link>
          <Link to="/simple-css">simple-css</Link>
          <Link to="/landing-page">landing-page</Link>
          <Link to="/parent-child">parent-child</Link>
          <Link to="/image-reveal">image-reveal</Link>
          <Link to="/fade-in">fade-in</Link>
          <Link to="/">home</Link>
        </div>
    </div>;
  }
}

export default Home;
