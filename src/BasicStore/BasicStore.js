import React, { useRef, useEffect } from "react";
import { TimelineLite, Power2 } from "gsap";

import hoodie from "../images/hoodie.jpeg";
import hats from "../images/hats.jpeg";
import longCover from "../images/long-cover.jpg";

import "./basicStore.scss";

const BasicStore = () => {
  let navOpen = useRef(null);
  let nav = useRef(null);
  let cover = useRef(null);

  const tl = new TimelineLite({ paused: true, reversed: true });

  useEffect(() => {
    tl.to(cover, 1, { width: "60%", ease: Power2.easeOut })
      .to(
        nav,
        1,
        {
          height: "100%",
          ease: Power2.easeOut,
        },
        "-= 0.5"
      )
      .fromTo(
        navOpen,
        0.5,
        { opacity: 0, x: 50, ease: Power2.easeOut },
        {
          opacity: 1,
          x: 0,
          onComplete: function() {
            navOpen.style.pointerEvents = "auto";
          },
        }
      );
  }, []);

  const toggleTween = tween => {
    tween.reversed() ? tween.play() : tween.reverse();
  };

  return (
    <div className="basic-store">
      <header>
        <nav
          ref={el => {
            nav = el;
          }}
        >
          <div className="nav-closed">
            <h3>Portfolio</h3>
            <ul>
              <li onClick={() => toggleTween(tl)} className="nav-button">
                Shop
              </li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div
            ref={el => {
              navOpen = el;
            }}
            className="nav-open"
          >
            <div className="clothing">
              <h2>Clothing</h2>
              <ul>
                <li>
                  <a href="#">Hats</a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                </li>
                <li>
                  <a href="#">Shirts</a>
                </li>
                <li>
                  <a href="#">Pants</a>
                </li>
              </ul>
            </div>
            <div className="nav-images">
              <img src={hoodie} alt="" />
              <img src={hats} alt="" />
            </div>
          </div>
        </nav>
        <img
          ref={el => {
            cover = el;
          }}
          className="cover"
          src={longCover}
          alt=""
        />
        <h2 className="cover-date">03/03/2019</h2>
      </header>
    </div>
  );
};

export default BasicStore;
