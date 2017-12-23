import * as fs from 'fs';
import * as React from 'react';

import { FullPage } from './components/FullPage';
import { Section } from './components/Section';
import { Slide } from './components/Slide';
import { SlideText } from './components/SlideText';

export class App extends React.Component {
  public render() {
    return (
      <FullPage>
        <Section className="intro-section">
          <Slide>
            <SlideText className="intro" text={fs.readFileSync(`${__dirname}/Sections/intro/slide1.md`, 'utf8')} />
          </Slide>
        </Section>

        <Section className="eighties-section">
          <Slide title={<div className="early-text">JRPGs In the 1980s</div>}>
            <SlideText
              className="S1S1 early-text"
              text={fs.readFileSync(`${__dirname}/Sections/80s/slide1.md`, 'utf8')}
            />
          </Slide>
          <Slide>
            <SlideText
              className="S1S2 early-text"
              text={fs.readFileSync(`${__dirname}/Sections/80s/slide1.md`, 'utf8')}
            />
          </Slide>
          <Slide>Hello3!</Slide>
        </Section>

        <Section className="nineties-section">
          <Slide className="slide-title" title={<div>JRPGs In the 1990s</div>} />
          <Slide>Section 2 Hello2!</Slide>
          <Slide>Section 2 Hello3!</Slide>
        </Section>

        <Section className="noughties-section">
          <Slide>JRPGs in the late 1990s to 2000s</Slide>
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
