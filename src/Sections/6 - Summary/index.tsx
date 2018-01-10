import * as fs from 'fs';
import * as React from 'react';

import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';
import { SlideText } from '../../components/SlideText';

declare const __dirname: string;

export class SummarySection extends React.Component<{}, {}> {
  public render() {
    return (
      <Section className="summary-section" upArrow>
        <Slide title={<div className="slide-title">Summary</div>}>
          <SlideText
            className="early-text"
            text={fs.readFileSync(`${__dirname}/slide1.md`, 'utf8')}
          />
        </Slide>
        <Slide>
          <SlideText
            className="early-text"
            text={fs.readFileSync(`${__dirname}/slide2.md`, 'utf8')}
          />
        </Slide>
        <Slide title={<div className="slide-title">Bibliography</div>}>
          <SlideText
            className="bibliography chrono-text"
            text={fs.readFileSync(`${__dirname}/bibliography.md`, 'utf8')}
          />
        </Slide>
      </Section>
    );
  }
}
