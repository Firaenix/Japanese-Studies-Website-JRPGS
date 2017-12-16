import * as React from "react";
import { Section } from "./components/Section";
import { FullPage } from "./components/FullPage";
import { Slide } from "./components/Slide";

export class App extends React.Component {
  public render() {
    return (
      <FullPage>
        <Section>
          <Slide>Hello!</Slide>
          <Slide>Hello2!</Slide>
          <Slide>Hello3!</Slide>
        </Section>
      </FullPage>
    );
  }
}
