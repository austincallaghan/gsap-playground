import React from "react";

import "./basicParallax.scss";
import { Elastic } from "gsap";

const SimpleCss = () => {
  // Position: fixed method
  // Scrolls content over a fixed banner image
  return (
    <div>
      <div className="banner"></div>
      <div className="header-fix">HEADER HEADER HEADER HEADER HEADER</div>
      <div className="page-content">
        Basically, there are 5 main parallax methods. 1. The first is shown
        here. It's setting a background banner and letting the content move over
        the banner. Pretty Simple. 2. The second is using the background
        attached property on the background images and this creates a similar
        effect, but can also be used for to space out junks of content. 3. The
        third method is adjusting the scroll speed of the different elements,
        thus creating the feeling of a parallax. This could be cool if you used
        it to have images or objects linger as the text scrolls faster down the
        page. 4. The fourth is adding class names to elements as the user
        scrolls
        <br />
        <br />
        Incididunt exercitation minim exercitation et ipsum occaecat aliquip
        cillum exercitation. Consectetur consectetur ex sit magna consequat elit
        minim minim eu. Fugiat duis enim duis officia eu laboris ex eiusmod anim
        occaecat quis fugiat. Incididunt exercitation minim exercitation et
        ipsum occaecat aliquip cillum exercitation. Consectetur consectetur ex
        sit magna consequat elit minim minim eu. Fugiat duis enim duis officia
        eu laboris ex eiusmod anim occaecat quis fugiat. Incididunt exercitation
        minim exercitation et ipsum occaecat aliquip cillum exercitation.
        Consectetur consectetur ex sit magna consequat elit minim minim eu.
        Fugiat duis enim duis officia eu laboris ex eiusmod anim occaecat quis
        fugiat. Incididunt exercitation minim exercitation et ipsum occaecat
        aliquip cillum exercitation. Consectetur consectetur ex sit magna
        consequat elit minim minim eu. Fugiat duis enim duis officia eu laboris
        ex eiusmod anim occaecat quis fugiat.
      </div>
    </div>
  );
};

export default SimpleCss;
