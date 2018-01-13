import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.extensions.min.js';

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
      scrollingSpeed: 350,
      controlArrows: false,
      slidesNavigation: true,
      showActiveTooltip: true,
      anchors: ['intro', '80s', '90s', '00s', '10s', 'summary']
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

      fn.fullpage.setMouseWheelScrolling(false);
      fn.fullpage.setAllowScrolling(false);
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
