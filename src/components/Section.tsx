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

  slidesCount: number;
}

interface State {
  sectionSlideCounter: number;
}

export class Section extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      sectionSlideCounter: 0
    };
  }

  private compileClassNames() {
    return classNames('section', this.props.className);
  }

  private onClickRight = () => {
    this.setState({
      sectionSlideCounter: this.state.sectionSlideCounter + 1
    });
  };

  private renderDownArrow() {
    if (this.state.sectionSlideCounter < this.props.slidesCount) {
      return;
    }

    if (!this.props.downArrow) {
      return;
    }

    return <DownArrow animating />;
  }

  private renderBackArrow() {
    if (this.state.sectionSlideCounter < this.props.slidesCount) {
      return;
    }

    if (!this.props.leftArrow) {
      return;
    }

    return <LeftArrow />;
  }

  private renderArrows(): JSX.Element {
    return (
      <Fragment>
        {this.props.upArrow && <UpArrow />}
        {this.renderDownArrow()}
        {this.renderBackArrow()}
        {this.props.rightArrow && (
          <RightArrow
            animating={this.state.sectionSlideCounter < this.props.slidesCount}
            onClick={this.onClickRight}
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
