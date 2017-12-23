import * as React from 'react';

import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';

export class TensSection extends React.Component<{}, {}> {
  public render() {
    return (
      <Section className="tens-section">
        <Slide title={<div className="slide-title">JRPGS in the modern era (2010s)</div>}>Section 2 Hello!</Slide>
        <Slide title={<div className="slide-title">Persona 5???</div>}>Section 2 Hello2!</Slide>
        <Slide title={<div className="slide-title">Dark Souls</div>}>Section 2 Hello3!</Slide>
      </Section>
    );
  }
}
