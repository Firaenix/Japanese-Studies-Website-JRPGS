import * as React from 'react';

interface Props {
  currentUrl: string | null;
  desiredUrl: string;
}

interface State {
  rememberSeen: boolean;
}

export class ContentSection extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      rememberSeen: this.isDesiredUrl(window.location.href, props.desiredUrl) ? true : false
    };
  }

  private isDesiredUrl = (url: string | null, desiredUrl: string) => {
    return url && url.includes(desiredUrl);
  };

  protected onArrowClick = () => {
    setTimeout(() => {
      const { currentUrl, desiredUrl } = this.props;
      if (this.isDesiredUrl(currentUrl, desiredUrl)) {
        if (!this.state.rememberSeen) {
          this.setRememberSeen();
        }
      }
    }, 1000);
  };

  protected setRememberSeen = () => {
    this.setState({
      rememberSeen: true
    });
  };
}
