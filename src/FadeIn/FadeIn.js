import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap/all";

import logo from "../logo.svg";
import "./fadeIn.scss";

const FadeIn = () => {
  let logoItem = useRef(null);
  let paragraphItem = useRef(null);
  let linkItem = useRef(null);

  // This acts as a componentDidMount
  useEffect(() => {
    // First Param: logoItem = the element we are referencing
    // Second Param: the duration of the animation
    // Third Param: the style / effects we want to put on the element
    TweenMax.to(logoItem, 0.8, { opacity: 1, y: -20, ease: Power3.easeOut });

    // Quick note: In the App.css file we are setting the opacity of the p and img tags to 0.
    TweenMax.to(paragraphItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.1,
    });

    TweenMax.to(linkItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="fadeIn">
      <header className="fadeIn-header">
        <img
          ref={el => {
            logoItem = el;
          }}
          src={logo}
          className="fadeIn-logo"
          alt="logo"
        />
        <p
          ref={el => {
            paragraphItem = el;
          }}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          ref={el => {
            linkItem = el;
          }}
          className="fadeIn-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default FadeIn;
