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
}

export class Section extends React.Component<Props, {}> {
  private compileClassNames() {
    return classNames('section', this.props.className);
  }

  private renderArrows(): JSX.Element {
    return (
      <Fragment>
        {this.props.upArrow && <UpArrow />}
        {this.props.downArrow && <DownArrow />}
        {this.props.leftArrow && <LeftArrow />}
        {this.props.rightArrow && <RightArrow />}
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
