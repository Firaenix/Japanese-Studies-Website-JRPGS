import * as classNames from 'classnames';
import * as React from 'react';

interface Props {
  className?: string;
  id?: string;
  children?: any;
  title?: JSX.Element | string;
}

export class Slide extends React.Component<Props, {}> {
  private compileClassNames() {
    return classNames('slide', { 'title-slide': !!this.props.title }, this.props.className);
  }

  public render() {
    return (
      <div id={this.props.id} className={this.compileClassNames()}>
        <div className="slide__background-screen" />
        <div className="slide__background" />
        <h1 className="slide-title">{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
