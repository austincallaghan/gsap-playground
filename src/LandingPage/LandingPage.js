import React, { useRef } from "react";

import { TweenMax, Circ, Back, Elastic } from "gsap";

import Light from "../light.png";

import "./landingPage.scss";

const LandingPage = () => {
  let panel = useRef(null);
  let lightbulb = useRef(null);
  let paraText = useRef(null);
  let box = useRef(null);

  const handleClick = () => {
    TweenMax.to(panel, 1.5, { scaleY: 1, height: "100vh", ease: Circ.easeOut });
    TweenMax.to(lightbulb, 1, {
      opacity: 1,
      y: 0,
      delay: 1.2,
      ease: Back.easeOut,
    });
    TweenMax.to(paraText, 1, {
      opacity: 1,
      y: 20,
      delay: 1.4,
    });
    TweenMax.to(box, 1.4, {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeOut.config(1, 0.3),
    });
  };

  return (
    <div className="landing-container">
      <h1>Engineerring For Tomorrow</h1>
      <button onClick={() => handleClick()} id="cta">
        watch here
      </button>
      <div
        ref={el => {
          panel = el;
        }}
        className="panel"
      >
        <img
          ref={el => {
            lightbulb = el;
          }}
          src={Light}
          alt=""
        />
        <p
          ref={el => {
            paraText = el;
          }}
        >
          Some great line about engineering and how we did something everyone
          will love.
        </p>
        <div
          ref={el => {
            box = el;
          }}
          className="box"
        ></div>
      </div>
    </div>
  );
};

export default LandingPage;
