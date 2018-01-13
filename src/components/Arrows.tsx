import * as $ from 'jquery';
import * as React from 'react';

interface ArrowProps {}

class BasicArrow extends React.Component<ArrowProps, {}> {
  protected fn: any;

  constructor(props: ArrowProps) {
    super(props);
    this.fn = $.fn;
  }

  public render(): JSX.Element {
    throw new Error('Arrow render not implemented');
  }
}

export class UpArrow extends BasicArrow {
  private move = () => {
    this.fn.fullpage.moveSectionUp();
  };

  public render() {
    return <div className="jrpg-controlArrow fp-up" onClick={this.move} />;
  }
}

export class DownArrow extends BasicArrow {
  private move = () => {
    this.fn.fullpage.moveSectionDown();
  };

  public render() {
    return <div className="jrpg-controlArrow fp-down" onClick={this.move} />;
  }
}

export class LeftArrow extends BasicArrow {
  private move = () => {
    this.fn.fullpage.moveSlideLeft();
  };

  public render() {
    return <div className="jrpg-controlArrow fp-prev" onClick={this.move} />;
  }
}

export class RightArrow extends BasicArrow {
  private move = () => {
    this.fn.fullpage.moveSlideRight();
  };

  public render() {
    return <div className="jrpg-controlArrow fp-next" onClick={this.move} />;
  }
}
