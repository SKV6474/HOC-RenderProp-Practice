import React, { useEffect, useState } from "react";
import { Dimension, functionType } from "../../interface";

const WithResize = (props: functionType) => {
  const [windowDimension, setWindowDimension] = useState<Dimension>({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  useEffect(() => {
    const handleIntialDimension = () => {
      setWindowDimension({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
    };

    handleIntialDimension();
    window.addEventListener("resize", handleIntialDimension);

    return () => window.removeEventListener("resize", handleIntialDimension);
  }, []);

  return (
    <>
      {props.renderBaseComponent()}
      <div>
        {windowDimension.innerHeight},{windowDimension.innerWidth}
      </div>
    </>
  );
};

export default WithResize;
