import * as classNames from 'classnames';
import * as React from 'react';
import { Fragment } from 'react';

interface Props {
  className?: string;
  id?: string;
  children?: any;
  title?: JSX.Element | string;
  hasBackground?: boolean;
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
      <Fragment>
        <div className="slide__background" />
        <div className="slide__background-screen" />
      </Fragment>
    );
  }

  public render() {
    return (
      <div id={this.props.id} className={this.compileClassNames()}>
        {this.renderBackground()}
        {!!this.props.title && <h1 className="slide-title">{this.props.title}</h1>}
        {this.props.children}
      </div>
    );
  }
}
