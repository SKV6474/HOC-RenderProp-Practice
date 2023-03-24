// import SingleComponent from "./SingleComponent";
// import { withResize } from "./HOC/WithResizeComponent/withResizeComponent";
import BaseComponent from "./HOC/BaseComponent/BaseComponent";
import React from "react";
// import MyComponent from "./newtes";
// import BaseRenderComponent from "./RenderProps/BaseRenderComponent/BaseRenderComponent";

function App() {
  const baseRef = React.useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (baseRef.current !== null) {
      baseRef.current.focus();
    }
  };

  return (
    <div>
      {/* <SingleComponent username="Rahul" /> */}
      <button onClick={handleFocus}>Click Me</button>
      <BaseComponent username="Rahul" ref={baseRef} />
      {/* HOC */}
      {/* <BaseRenderComponent username="Rahul" /> */}
      {/* <MyComponent /> */}
    </div>
  );
}

export default App;
