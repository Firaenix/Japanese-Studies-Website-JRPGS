import * as React from "react";
import * as $ from "jquery";
import "fullpage.js";

export class FullPage extends React.Component {
  public componentWillMount() {
    this.setupFullPage();
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
    return <div id="fullpage">{this.props.children}</div>;
  }
}
