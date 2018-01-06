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
        <Slide title={<div className="slide-title">Summary</div>}>Section 2 Hello!</Slide>
        <Slide>Section 2 Hello2!</Slide>
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
