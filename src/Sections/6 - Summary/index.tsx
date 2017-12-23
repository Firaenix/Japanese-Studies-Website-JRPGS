import * as React from 'react';

import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';

export class SummarySection extends React.Component<{}, {}> {
  public render() {
    return (
      <Section className="summary-section">
        <Slide title={<div className="slide-title">Summary</div>}>Section 2 Hello!</Slide>
        <Slide>Section 2 Hello2!</Slide>
        <Slide>Section 2 Hello3!</Slide>
      </Section>
    );
  }
}
