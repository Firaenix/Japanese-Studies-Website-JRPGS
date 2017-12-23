import * as fs from 'fs';
import * as React from 'react';

import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';
import { SlideText } from '../../components/SlideText';

export class EightiesSection extends React.Component<{}, {}> {
  public render() {
    return (
      <Section className="eighties-section">
        <Slide title={<div className="early-text">JRPGs In the 1980s</div>} />
        <Slide title={<div className="early-text fit">Dragon Warrior</div>}>
          <SlideText className="S1S1 early-text" text={fs.readFileSync(`${__dirname}/slide1.md`, 'utf8')} />
        </Slide>
        <Slide title={<div className="early-text fit">Final Fantasy</div>}>
          <SlideText className="S1S2 early-text" text={fs.readFileSync(`${__dirname}/slide2.md`, 'utf8')} />
        </Slide>
        <Slide title={<div className="early-text fit">Video Games reach the Mainstream</div>}>
          <SlideText className="S1S3 early-text" text={fs.readFileSync(`${__dirname}/slide3.md`, 'utf8')} />
        </Slide>
      </Section>
    );
  }
}
