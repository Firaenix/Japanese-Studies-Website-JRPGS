import * as React from 'react';

import { FullPage } from './components/FullPage';
import { IntroSection } from './Sections/1 - Intro/';
import { EightiesSection } from './Sections/2 - 80s';
import { NinetiesSection } from './Sections/3 - 90s';
import { NoughtiesSection } from './Sections/4 - 00s';
import { TensSection } from './Sections/5 - 10s';
import { SummarySection } from './Sections/6 - Summary';

interface State {
  currentUrl: string | null;
}

export class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    window.onhashchange = this.urlChanged;

    this.state = {
      currentUrl: window.location.href
    };
  }

  private urlChanged = (e: HashChangeEvent) => {
    this.setState({
      currentUrl: e.newURL
    });
  };

  public render() {
    const { currentUrl } = this.state;

    return (
      <FullPage>
        <IntroSection />
        <EightiesSection currentUrl={currentUrl} desiredUrl="#80s/2" />
        <NinetiesSection currentUrl={currentUrl} desiredUrl="#90s/2" />
        <NoughtiesSection currentUrl={currentUrl} desiredUrl="#00s/2" />
        <TensSection currentUrl={currentUrl} desiredUrl="#10s/2" />
        <SummarySection />
      </FullPage>
    );
  }
}
