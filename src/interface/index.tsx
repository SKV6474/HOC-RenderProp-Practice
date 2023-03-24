// import { forwardRef } from "react";

export type singleComponentProps = {
  username: string;
};

export type Base = {
  username: string;
};

export type Dimension = {
  innerWidth: number;
  innerHeight: number;
};

export type functionType = {
  renderBaseComponent: () => React.ReactNode;
};

export type functionType2 = {
  renderWithResize: () => React.ReactNode;
};

export type RefBase = {
  // username: string;
  forwardRef: any;
};

export type mostBase = {
  username: string;
  reff: any;
};
