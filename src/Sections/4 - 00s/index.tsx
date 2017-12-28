import * as React from 'react';

import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';

declare const __dirname: string;

export class NoughtiesSection extends React.Component<{}, {}> {
  public render() {
    return (
      <Section className="noughties-section">
        <Slide title={<div className="slide-title">JRPGs in the late 1990s to 2000s</div>} />
        <Slide title={<div className="slide-title">Final Fantasy VII</div>}>
          Section 2 Hello2!
        </Slide>
        <Slide title={<div className="slide-title">Some other big JRPG from 2000</div>}>
          Section 2 Hello3!
        </Slide>
      </Section>
    );
  }
}
