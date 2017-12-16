import 'fullpage.js';

import * as classNames from 'classnames';
import * as $ from 'jquery';
import * as React from 'react';

interface Props {
  className?: string;
  children?: any;
}

export class FullPage extends React.Component<Props, {}> {
  public componentWillMount() {
    this.setupFullPage();
  }

  private compileClassNames() {
    return classNames('fullpage', this.props.className);
  }

  private getSettings() {
    return {
      scrollingSpeed: 550,
      continuousVertical: true,
      continuousHorizontal: true,
      dragAndMove: true,
      navigation: true,
      controlArrows: true,
      navigationPosition: 'bottom',
      slidesNavigation: true,
      slidesNavPosition: 'bottom'
    };
  }

  private setupFullPage() {
    $(document).ready(() => {
      const fn: any = $.fn;
      if (fn.fullpage.destroy) {
        fn.fullpage.destroy('all');
      }

      const fullPageTag: any = $('#fullpage');
      fullPageTag.fullpage(this.getSettings());
    });
  }

  public render() {
    return (
      <div id="fullpage" className={this.compileClassNames()}>
        {this.props.children}
      </div>
    );
  }
}
