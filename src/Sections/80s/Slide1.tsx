import * as React from 'react';
import * as Markdown from 'react-markdown';

export class Slide1 extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="S80-sS1">
        <Markdown className="early-text" source={`# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!
`} />
      </div>
    );
  }
}
