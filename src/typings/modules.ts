declare module '.json';
declare module '.md';
declare module '.txt';
declare module '.svg';
declare module '.gif';
declare module '.png';

declare module 'react-markdown-plus' {
  interface Props {
    text: string;
    style?: React.CSSProperties;
  }

  export default class Markdown extends React.Component<Props, {}> {}
}
