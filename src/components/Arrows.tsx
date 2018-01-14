import * as classNames from 'classnames';
import * as $ from 'jquery';
import * as React from 'react';

interface ArrowProps {
  onClick?: () => any;
  animating?: boolean;
}

class BasicArrow extends React.Component<ArrowProps, {}> {
  protected fn: any;

  constructor(props: ArrowProps) {
    super(props);
    this.fn = $.fn;
  }

  protected compileClassNames(): string {
    throw new Error('please implement compile class names');
  }

  protected move = (): any => {
    throw new Error('please implement move');
  };

  protected onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }

    this.move();
  };

  public render(): JSX.Element {
    return <div className={this.compileClassNames()} onClick={this.onClick} />;
  }
}

export class UpArrow extends BasicArrow {
  protected compileClassNames() {
    return classNames('jrpg-controlArrow', ' fp-up', {
      'arrow--animating': this.props.animating
    });
  }

  protected move = () => {
    this.fn.fullpage.moveSectionUp();
  };
}

export class DownArrow extends BasicArrow {
  protected compileClassNames() {
    return classNames('jrpg-controlArrow', ' fp-down', {
      'arrow--animating': this.props.animating
    });
  }

  protected move = () => {
    this.fn.fullpage.moveSectionDown();
  };
}

export class LeftArrow extends BasicArrow {
  protected compileClassNames() {
    return classNames('jrpg-controlArrow', ' fp-prev', {
      'arrow--animating': this.props.animating
    });
  }

  protected move = () => {
    this.fn.fullpage.moveSlideLeft();
  };
}

export class RightArrow extends BasicArrow {
  protected compileClassNames() {
    return classNames('jrpg-controlArrow', ' fp-next', {
      'arrow--animating': this.props.animating
    });
  }
  protected move = () => {
    this.fn.fullpage.moveSlideRight();
  };
}
