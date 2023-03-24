import React, { useEffect, useState } from "react";
import { Base, Dimension, RefBase } from "../../interface";

export const withResize = (WrappedComponent: React.ComponentType<any>) => {
  // class WithResizeComponent extends React.Component<RefBase, Dimension> {
  //   constructor(props: RefBase) {
  //     super(props);
  //     this.state = {
  //       innerHeight: window.innerHeight,
  //       innerWidth: window.innerWidth,
  //     };
  //   }

  //   componentDidMount(): void {
  //     const handleIntialDimension = () => {
  //       this.setState({
  //         innerHeight: window.innerHeight,
  //         innerWidth: window.innerWidth,
  //       });
  //     };

  //     handleIntialDimension();
  //     window.addEventListener("resize", handleIntialDimension);
  //   }

  //   render() {
  //     return (
  //       <>
  //         <WrappedComponent reff={this.props.forwardRef} {...this.props} />
  //         <div>
  //           {this.state.innerHeight},{this.state.innerWidth}
  //         </div>
  //       </>
  //     );
  //   }

  const WithResizeComponent = (props: RefBase) => {
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
        <WrappedComponent reff={props.forwardRef} {...props} />
        <div>
          {windowDimension.innerHeight},{windowDimension.innerWidth}
        </div>
      </>
    );
  };

  return React.forwardRef((props: Base, ref) => {
    return <WithResizeComponent forwardRef={ref} {...props} />;
  });
};
