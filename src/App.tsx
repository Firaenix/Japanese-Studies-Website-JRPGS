import * as React from 'react';

import { FullPage } from './components/FullPage';
import { Section } from './components/Section';
import { Slide } from './components/Slide';
import { Slide1 } from './Sections/80s/Slide1';

export class App extends React.Component {
  public render() {
    return (
      <FullPage>
        <Section className="intro-section">
          <Slide>
            <div>Welcome to Nicholas Carton's JPS350 Website</div>
            <div>You can navigate this site with your keyboard's arrow keys!</div>
            <div>If you're using a touch device, you can scroll with your finger!</div>
          </Slide>
        </Section>

        <Section className="eighties-section">
          <Slide>
            <Slide1 />
          </Slide>
          <Slide>Hello2!</Slide>
          <Slide>Hello3!</Slide>
        </Section>

        <Section className="nineties-section">
          <Slide>Section 2 Hello!</Slide>
          <Slide>Section 2 Hello2!</Slide>
          <Slide>Section 2 Hello3!</Slide>
        </Section>

        <Section className="noughties-section">
          <Slide>Section 2 Hello!</Slide>
          <Slide>Section 2 Hello2!</Slide>
          <Slide>Section 2 Hello3!</Slide>
        </Section>

        <Section className="tens-section">
          <Slide>Section 2 Hello!</Slide>
          <Slide>Section 2 Hello2!</Slide>
          <Slide>Section 2 Hello3!</Slide>
        </Section>

        <Section className="summary-section">
          <Slide>Section 2 Hello!</Slide>
          <Slide>Section 2 Hello2!</Slide>
          <Slide>Section 2 Hello3!</Slide>
        </Section>
      </FullPage>
    );
  }
}
