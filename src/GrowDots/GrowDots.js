import React, { useRef, useEffect, useState } from "react";
import { TweenMax, Power3 } from "gsap";

import "./growDots.scss";

// TODO: Make the dots work correctly when you click them

const GrowDots = () => {
  let growApp = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = e => {
    TweenMax.to(circleRed, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setState(true);
  };

  const handleShrink = e => {
    TweenMax.to(circleRed, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setState(false);
  };

  useEffect(() => {
    console.log("...");
    // In the css file we set the visibility to hidden. Here on componentDidMount we are changing the css to visibility "visible" to aviod the stuttered loading.
    // .to specifies the values we want to go TO. So, we are going from visibility: hidden TO visibility: 'visible'

    // Finally, css is a parameter of the var param. Just FYI
    TweenMax.to(growApp, 0, { css: { visibility: "visible" } });

    // .from sets the initial values of the element (Get a better explaination)
    // This is the long hand way
    // TweenMax.from(circle, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
    // TweenMax.from(circleRed, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   delay: 0.2,
    //   ease: Power3.easeOut,
    // });
    // TweenMax.from(circleBlue, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   delay: 0.4,
    //   ease: Power3.easeOut,
    // });

    // This will run the same animation for each item in the array
    // The fourth param is a delay option
    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue],
      0.8,
      { opacity: 0, x: 40, ease: Power3.easeOut },
      0.2
    );
  }, []);

  return (
    <div
      ref={el => {
        growApp = el;
      }}
      className="Grow"
    >
      <header className="Grow-header">
        <div className="circle-container">
          <div
            ref={el => {
              circle = el;
            }}
            id={1}
            onClick={state !== true ? handleExpand : handleShrink}
            className="circle"
          ></div>
          <div
            ref={el => {
              circleRed = el;
            }}
            id={2}
            onClick={state !== true ? handleExpand : handleShrink}
            className="circle red"
          ></div>
          <div
            ref={el => {
              circleBlue = el;
            }}
            id={3}
            onClick={state !== true ? handleExpand : handleShrink}
            className="circle blue"
          ></div>
        </div>
      </header>
    </div>
  );
};

export default GrowDots;
