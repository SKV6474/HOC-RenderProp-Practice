import React from "react";
import { DataList } from "../../Data/Data";
import { Base, RefBase } from "../../interface";

export const withList = (WrappedComponent: React.ComponentType<any>) => {
  const WithListComponent = (props: RefBase) => {
    let newList = DataList.map((fruit) => <li key={fruit}>{fruit}</li>);

    return (
      <>
        <WrappedComponent ref={props.forwardRef} {...props} />
        <div>{newList}</div>
      </>
    );
  };

  return React.forwardRef((props: Base, ref) => {
    return <WithListComponent forwardRef={ref} {...props} />;
  });
};
