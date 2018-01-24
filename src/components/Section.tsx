import * as classNames from 'classnames';
import * as React from 'react';
import { Fragment } from 'react';

import { DownArrow, LeftArrow, RightArrow, UpArrow } from './Arrows';

interface Props {
  className?: string;
  id?: string;
  children?: any;
  upArrow?: boolean;
  downArrow?: boolean;
  leftArrow?: boolean;
  rightArrow?: boolean;
  isRightAnimating?: boolean;

  onArrowClicked?: (...args: Array<any>) => any;
}

export class Section extends React.Component<Props, {}> {
  private compileClassNames() {
    return classNames('section', this.props.className);
  }

  private renderArrows(): JSX.Element {
    return (
      <Fragment>
        {this.props.upArrow && <UpArrow onClick={this.props.onArrowClicked} />}
        {this.props.downArrow && <DownArrow animating onClick={this.props.onArrowClicked} />}
        {this.props.leftArrow && <LeftArrow onClick={this.props.onArrowClicked} />}
        {this.props.rightArrow && (
          <RightArrow
            animating={this.props.isRightAnimating}
            onClick={this.props.onArrowClicked}
          />
        )}
      </Fragment>
    );
  }

  public render() {
    return (
      <div id={this.props.id} className={this.compileClassNames()}>
        {this.renderArrows()}
        {this.props.children}
      </div>
    );
  }
}
