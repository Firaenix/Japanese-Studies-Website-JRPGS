import * as React from 'react';

import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';

export class NinetiesSection extends React.Component<{}, {}> {
  public render() {
    return (
      <Section className="nineties-section">
        <Slide title={<div className="slide-title">JRPGs In the 1990s</div>} />
        <Slide title={<div className="slide-title">Final Fantasy IV</div>}>Section 2 Hello2!</Slide>
        <Slide title={<div className="slide-title">Chrono Trigger</div>}>Section 2 Hello3!</Slide>
      </Section>
    );
  }
}
