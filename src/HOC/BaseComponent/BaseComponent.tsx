import React from "react";
import { mostBase } from "../../interface";
import { withResize } from "../WithResizeComponent/withResizeComponent";
import { withList } from "../WithListComponent/withListComponent";

class BaseComponent extends React.Component<mostBase> {
  render() {
    const { username } = this.props;
    return (
      <>
        <input type="text" ref={this.props.reff} />
        <div>{username}</div>
      </>
    );
  }
}

// const BaseComponent = (props: mostBase) => {
//   const { username } = props;

//   return <div>{username}</div>;
// };

export default withList(withResize(BaseComponent));
