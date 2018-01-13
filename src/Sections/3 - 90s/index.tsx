import * as fs from 'fs';
import * as React from 'react';

import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';
import { SlideText } from '../../components/SlideText';

declare const __dirname: string;

export class NinetiesSection extends React.Component<{}, {}> {
  public render() {
    return (
      <Section className="nineties-section" downArrow upArrow leftArrow rightArrow>
        <Slide title={<div className="slide-title">JRPGs In the 1990s</div>}>
          <SlideText
            className="chrono-text"
            text={fs.readFileSync(`${__dirname}/title.md`, 'utf8')}
          />
        </Slide>
        <Slide title={<div className="slide-title">Seiken Densetsu 2 (Secret of Mana)</div>}>
          <SlideText
            className="chrono-text"
            text={fs.readFileSync(`${__dirname}/slide1.md`, 'utf8')}
          />
        </Slide>
        <Slide title={<div className="slide-title">Chrono Trigger</div>}>
          <SlideText
            className="chrono-text"
            text={fs.readFileSync(`${__dirname}/slide2.md`, 'utf8')}
          />
        </Slide>
      </Section>
    );
  }
}
