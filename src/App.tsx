import * as React from 'react';

import { FullPage } from './components/FullPage';
import { IntroSection } from './Sections/1 - Intro/';
import { EightiesSection } from './Sections/2 - 80s';
import { NinetiesSection } from './Sections/3 - 90s';
import { NoughtiesSection } from './Sections/4 - 00s';
import { TensSection } from './Sections/5 - 10s';
import { SummarySection } from './Sections/6 - Summary';

export class App extends React.Component {
  public render() {
    return (
      <FullPage>
        <IntroSection />
        <EightiesSection />
        <NinetiesSection />
        <NoughtiesSection />
        <TensSection />
        <SummarySection />
      </FullPage>
    );
  }
}
