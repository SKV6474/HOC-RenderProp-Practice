import React, { useEffect, useState } from "react";
import { singleComponentProps, Dimension } from "../interface";

import { DataList } from "../Data/Data";

const SingleComponent = (props: singleComponentProps) => {
  const { username } = props;

  const [windowDimension, setWindowDimension] = useState<Dimension>({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  let newList = DataList.map((fruit) => <li key={fruit}>{fruit}</li>);

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
      <div>{username}</div>
      <div>{newList}</div>
      <div>
        {windowDimension.innerHeight},{windowDimension.innerWidth}
      </div>
    </>
  );
};

export default SingleComponent;
