import React from "react";
import { Base } from "../../interface";
import WithResize from "../WithResize/WithResize";
import WithList from "../WithList/WithList";

const BaseRenderComponent = (props: Base) => {
  const { username } = props;

  const renderBaseComponent = () => {
    return <div>{username}</div>;
  };

  const renderWithResize = () => {
    return <WithResize renderBaseComponent={renderBaseComponent} />;
  };

  return <WithList renderWithResize={renderWithResize} />;
};

export default BaseRenderComponent;
