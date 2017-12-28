import * as fs from 'fs';
import * as React from 'react';

import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';
import { SlideText } from '../../components/SlideText';

declare const __dirname: string;

export class IntroSection extends React.Component<{}, {}> {
  public render() {
    return (
      <Section className="intro-section">
        <Slide>
          <SlideText className="intro" text={fs.readFileSync(`${__dirname}/slide1.md`, 'utf8')} />
        </Slide>
      </Section>
    );
  }
}
