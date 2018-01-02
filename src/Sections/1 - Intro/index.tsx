import * as fs from 'fs';
import * as React from 'react';

import { DemoMode } from '../../components/DemoMode';
import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';
import { SlideText } from '../../components/SlideText';

declare const __dirname: string;

export class IntroSection extends React.Component<{}, {}> {
  public render() {
    return (
      <Section id="intro-section" className="intro-section">
        <Slide title="Welcome to the online JRPG History Museum!">
          <SlideText
            className="intro-text"
            text={fs.readFileSync(`${__dirname}/slide1.md`, 'utf8')}
          />
          <button
            id="demo-btn"
            className="demo-btn"
            onClick={async () => await DemoMode.scrollDown(100)}
          >
            Start Demo Mode!
          </button>
        </Slide>
      </Section>
    );
  }
}
