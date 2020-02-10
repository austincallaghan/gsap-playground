import React, { useRef, useEffect } from "react";
import Child from "./Child";
import "../App.scss";

const Parent = () => {
  let childRef = useRef(null);

  const handleColor = color => {
    childRef.current.style.color = color;
  };

  useEffect(() => {
    console.log(childRef.current);
  }, []);

  return (
    <div>
      <Child
        handleColor={handleColor}
        forwardedRef={childRef}
        title="This is the title passed down from Parent to Child"
      />
    </div>
  );
};

export default Parent;
