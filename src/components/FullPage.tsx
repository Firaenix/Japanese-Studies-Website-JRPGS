import * as React from "react";
import * as $ from "jquery";
import "fullpage.js";
import * as classNames from "classnames";

interface Props {
  className?: string;
  children?: any;
}

export class FullPage extends React.Component<Props, {}> {
  public componentWillMount() {
    this.setupFullPage();
  }

  private compileClassNames() {
    return classNames("fullpage", this.props.className);
  }

  private setupFullPage() {
    $(document).ready(() => {
      const fullPageTag: any = $("#fullpage");
      fullPageTag.fullpage({
        sectionsColor: ["#1bbc9b", "#4BBFC3", "#7BAABE", "whitesmoke", "#ccddff"],
        anchors: ["firstPage", "secondPage", "3rdPage", "4thpage", "lastPage"],
        menu: "#menu",
        scrollingSpeed: 1000,
      });
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
