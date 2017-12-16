import * as React from 'react';

import { FullPage } from './components/FullPage';
import { Section } from './components/Section';
import { Slide } from './components/Slide';

export class App extends React.Component {
  public render() {
    return (
      <FullPage>
        <Section className="eighties">
          <Slide>Hello!</Slide>
          <Slide>Hello2!</Slide>
          <Slide>Hello3!</Slide>
        </Section>

        <Section className="nineties">
          <Slide>Section 2 Hello!</Slide>
          <Slide>Section 2 Hello2!</Slide>
          <Slide>Section 2 Hello3!</Slide>
        </Section>
      </FullPage>
    );
  }
}
