import React from 'react'
import './navCombo.scss'

import {  Link, withRouter } from 'react-router-dom';



 const NavCombo = () => (
<nav role="navigation">
<div id="menuToggle">
<input type="checkbox" />
<span></span>
<span></span>
<span></span>
<ul id="menu">
<li><Link to="/">Home</Link></li>
<li><Link to="/grow-dots">Grow Dots</Link></li>
<li><Link to="/tictactoe">TicTacToe</Link></li>
<li><Link to="/landing-page">Landing Page</Link></li>
<li><Link to="/fade-in">Fade In</Link></li>
<li><Link to="/image-reveal">Image Reveal</Link></li>
<li><Link to="/speedometer">Speedometer</Link></li>
<li><Link to="/parent-child">Parent-Child</Link></li>
<li><Link to="/simple-css">Simple CSS</Link></li>
<li><Link to="/basic-store">Basic Store</Link></li>
<li><Link to="/van-life">Van Life</Link></li>
<li><Link to="/carousel-slider">Carousel Slider</Link></li>
</ul>
</div>
</nav>
)

export default withRouter(NavCombo)