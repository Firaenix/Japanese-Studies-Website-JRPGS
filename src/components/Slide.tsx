import * as classNames from 'classnames';
import * as React from 'react';
import { Fragment } from 'react';

import { LeftArrow } from './Arrows';

interface Props {
  className?: string;
  id?: string;
  children?: any;
  title?: JSX.Element | string;
  hasBackground?: boolean;
  leftArrow?: boolean;
}

export class Slide extends React.Component<Props, {}> {
  private compileClassNames() {
    return classNames('slide', { 'title-slide': !!this.props.title }, this.props.className);
  }

  private renderBackground() {
    if (!this.props.hasBackground) {
      return;
    }

    return (
      <div>
        <div className="slide__background" />
        <div className="slide__background-screen" />
      </div>
    );
  }

  public render() {
    return (
      <div id={this.props.id} className={this.compileClassNames()}>
        {this.props.leftArrow && <LeftArrow />}
        {this.renderBackground()}
        {!!this.props.title && <h1 className="slide-title">{this.props.title}</h1>}
        {this.props.children}
      </div>
    );
  }
}
