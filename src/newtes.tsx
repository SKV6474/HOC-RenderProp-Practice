import { ReactElement, useRef, RefObject } from "react";

// type ref = {
//   myRef: any;
// };

function MyComponent() {
  const myRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (myRef.current !== null) {
      myRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default MyComponent;
