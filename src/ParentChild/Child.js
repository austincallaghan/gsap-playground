import React, { useEffect } from "react";

import "../App.scss";

const Child = ({ title, forwardedRef, handleColor }) => {
  useEffect(() => {
    console.log(forwardedRef.current, "Child Comp");
  }, []);

  return (
    <div>
      <p onClick={() => handleColor("red")} ref={forwardedRef}>
        {title}
      </p>
    </div>
  );
};

export default Child;
