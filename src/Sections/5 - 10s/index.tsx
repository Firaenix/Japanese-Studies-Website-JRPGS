import * as fs from 'fs';
import * as React from 'react';

import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';
import { SlideText } from '../../components/SlideText';

declare const __dirname: string;

export class TensSection extends React.Component<{}, {}> {
  public render() {
    return (
      <Section className="tens-section" downArrow upArrow>
        <Slide title={<div className="slide-title">JRPGS in the modern era (2010s)</div>}>
          <SlideText
            className="early-text"
            text={fs.readFileSync(`${__dirname}/title.md`, 'utf8')}
          />
        </Slide>
        <Slide title={<div className="slide-title">Xenoblade Chronicles</div>}>
          <SlideText
            className="early-text"
            text={fs.readFileSync(`${__dirname}/slide1.md`, 'utf8')}
          />
        </Slide>
        <Slide title={<div className="slide-title">Persona 5</div>}>
          <SlideText
            className="early-text"
            text={fs.readFileSync(`${__dirname}/slide2.md`, 'utf8')}
          />
        </Slide>
      </Section>
    );
  }
}
