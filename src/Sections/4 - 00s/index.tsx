import * as fs from 'fs';
import * as React from 'react';

import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';
import { SlideText } from '../../components/SlideText';

declare const __dirname: string;

export class NoughtiesSection extends React.Component<{}, {}> {
  public render() {
    return (
      <Section className="noughties-section" downArrow upArrow>
        <Slide title={<div className="slide-title">JRPGs in the late 1990s to 2000s</div>}>
          <SlideText
            className="ffvii-text"
            text={fs.readFileSync(`${__dirname}/title.md`, 'utf8')}
          />
        </Slide>
        <Slide title={<div className="slide-title">Final Fantasy VII</div>}>
          <SlideText
            className="ffvii-text"
            text={fs.readFileSync(`${__dirname}/slide1.md`, 'utf8')}
          />
        </Slide>
        <Slide title={<div className="slide-title">Pokémon</div>}>
          <SlideText
            className="ffvii-text"
            text={fs.readFileSync(`${__dirname}/slide2.md`, 'utf8')}
          />
        </Slide>
      </Section>
    );
  }
}
