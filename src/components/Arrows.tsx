import * as $ from 'jquery';
import * as React from 'react';

interface ArrowProps {}

class BasicArrow extends React.Component<ArrowProps, {}> {
  private fn: any;

  constructor(props: ArrowProps) {
    super(props);
    this.fn = $.fn;
  }

  protected moveTo = () => {
    throw new Error('Arrow moveTo not implemented');
  };

  public render(): JSX.Element {
    throw new Error('Arrow render not implemented');
  }
}

export class UpArrow extends BasicArrow {
  public render() {
    return <div className="fp-controlArrow fp-up" />;
  }
}

export class DownArrow extends BasicArrow {
  public render() {
    return <div className="fp-controlArrow fp-down" />;
  }
}
