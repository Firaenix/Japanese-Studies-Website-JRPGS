import * as classNames from 'classnames';
import * as React from 'react';

interface Props {
  className?: string;
  id?: string;
  children?: any;
}

export class Section extends React.Component<Props, {}> {
  private compileClassNames() {
    return classNames('section', this.props.className);
  }

  public render() {
    return (
      <div id={this.props.id} className={this.compileClassNames()}>
        {this.props.children}
      </div>
    );
  }
}
