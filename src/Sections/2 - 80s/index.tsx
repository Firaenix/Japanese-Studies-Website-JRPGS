import * as fs from 'fs';
import * as React from 'react';

import { ContentSection } from '../../components/ContentSection';
import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';
import { SlideText } from '../../components/SlideText';
import * as slimegif from '../../images/80s-slime.gif';

declare const __dirname: string;

export class EightiesSection extends ContentSection {
  public render() {
    return (
      <Section
        className="eighties-section"
        upArrow
        rightArrow
        isRightAnimating={!this.state.rememberSeen}
        leftArrow={this.state.rememberSeen}
        downArrow={this.state.rememberSeen}
        onArrowClicked={this.onArrowClick}
      >
        <Slide
          className="intro"
          title={<div className="early-text fit">JRPGs In the 1980s</div>}
        >
          <SlideText
            className="early-text"
            text={fs.readFileSync(`${__dirname}/title.md`, 'utf8')}
          />
        </Slide>

        <Slide id="S1S1" title={<div className="early-text fit">Dragon Quest</div>}>
          <img className="small-slime" src={slimegif} />
          <SlideText
            className="early-text"
            text={fs.readFileSync(`${__dirname}/slide1.md`, 'utf8')}
          />
        </Slide>

        <Slide
          id="S1S2"
          title={<div className="early-text fit">Final Fantasy</div>}
          hasBackground
        >
          <SlideText
            className="early-text"
            text={fs.readFileSync(`${__dirname}/slide2.md`, 'utf8')}
          />
        </Slide>
      </Section>
    );
  }
}
