import React from "react";
import { DataList } from "../../Data/Data";
import { functionType2 } from "../../interface";

const WithList = (props: functionType2) => {
  let newList = DataList.map((fruit) => <li key={fruit}>{fruit}</li>);

  return (
    <>
      {props.renderWithResize()}
      <div>{newList}</div>
    </>
  );
};

export default WithList;
