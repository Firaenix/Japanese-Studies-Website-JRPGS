import * as React from "react";
import { Page } from "./components/Page";
import { FullPage } from "./components/FullPage";

export class App extends React.Component {
  public render() {
    return (
      <FullPage>
        <Page />
      </FullPage>
    );
  }
}
