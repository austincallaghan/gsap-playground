import React, { useRef, useEffect } from "react";
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

import People from "../imageRev.jpg";

import "./imageReveal.scss";

const ImageReveal = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });

    console.log(imageReveal);
  });

  return (
    <section className="main">
      <div
        ref={el => {
          container = el;
        }}
        className="container"
      >
        <>
          <div className="img-container">
            <img
              ref={el => {
                image = el;
              }}
              src={People}
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default ImageReveal;
