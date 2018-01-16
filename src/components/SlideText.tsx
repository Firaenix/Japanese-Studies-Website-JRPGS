import * as classNames from 'classnames';
import * as React from 'react';
import * as Markdown from 'react-markdown';

interface Props {
  text: string;
  className: string;
}

declare const __dirname: string;

export class SlideText extends React.Component<Props, {}> {
  public compileClassNames() {
    return classNames('slide-text', this.props.className);
  }

  public render() {
    return (
      <div className={this.compileClassNames()}>
        <div>
          <Markdown className="markdown-text" source={this.props.text} escapeHtml={false} />
        </div>
      </div>
    );
  }
}
