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
    return classNames('slide', this.props.className);
  }

  public render() {
    return (
      <div id={this.props.id} className={this.compileClassNames()}>
        <div className="slide-title">{this.props.title}</div>
        {this.props.children}
      </div>
    );
  }
}
