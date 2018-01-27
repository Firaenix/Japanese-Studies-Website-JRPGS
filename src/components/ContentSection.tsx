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
    // Currying this function because in some browsers, this gets lost
    setTimeout(
      ((self: this) => () => {
        const { currentUrl, desiredUrl } = self.props;

        console.log('Current:', currentUrl);
        console.log('Desired:', desiredUrl);

        if (self.isDesiredUrl(currentUrl, desiredUrl)) {
          if (!self.state.rememberSeen) {
            self.setRememberSeen();
          }
        }
      })(this),
      100
    );
  };

  protected setRememberSeen = () => {
    this.setState({
      rememberSeen: true
    });
  };
}
