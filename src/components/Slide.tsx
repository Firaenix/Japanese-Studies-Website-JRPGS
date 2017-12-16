import * as React from "react";

interface Props {
  className?: string;
  id?: string;
  children?: any;
}

export class Slide extends React.Component<Props, {}> {
  public render() {
    return <div className="slide">{this.props.children}</div>;
  }
}
