import React, { useRef, useEffect } from "react";
import { Power2, TimelineMax } from "gsap";

import "./vanLife.scss";
import Bug from "../images/bug.jpg";
import Burger from "../images/burger.svg";

const VanLife = () => {
  let container = useRef(null);
  let hero = useRef(null);
  let slider = useRef(null);
  let logo = useRef(null);
  let burger = useRef(null);

  const tl = new TimelineMax();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } })
      .fromTo(
        hero,
        1,
        { height: "0%" },
        { height: "80%", ease: Power2.easeInOut }
      )
      .fromTo(
        hero,
        1.2,
        { width: "100%" },
        { width: "80%", ease: Power2.easeInOut }
      )
      .fromTo(
        slider,
        1.2,
        { x: "-100%" },
        { x: "0%", ease: Power2.easeInOut },
        "-=1.2"
      )
      .fromTo(logo, 0.7, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.7")
      .fromTo(
        burger,
        0.7,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "-=0.7"
      );
  }, []);

  return (
    <div className="van-life-container" ref={el => (container = el)}>
      <header>
        <nav>
          <h3 ref={el => (logo = el)} id="logo">
            Fancy Car
          </h3>
          <img
            ref={el => (burger = el)}
            className="burger"
            src={Burger}
            alt="burger"
          />
        </nav>
        <section>
          <div ref={el => (hero = el)} className="hero">
            <img src={Bug} />
            <h1 className="headline">Dream Big, folks</h1>
          </div>
        </section>
      </header>

      <div ref={el => (slider = el)} className="slider"></div>
    </div>
  );
};

export default VanLife;
