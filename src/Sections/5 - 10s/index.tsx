import * as fs from 'fs';
import * as React from 'react';

import { ContentSection } from '../../components/ContentSection';
import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';
import { SlideText } from '../../components/SlideText';

declare const __dirname: string;

export class TensSection extends ContentSection {
  public render() {
    return (
      <Section
        className="tens-section"
        upArrow
        rightArrow
        isRightAnimating={!this.state.rememberSeen}
        leftArrow={this.state.rememberSeen}
        downArrow={this.state.rememberSeen}
        onArrowClicked={this.onArrowClick}
      >
        <Slide title={<div className="slide-title">JRPGs in the modern era (2010s)</div>}>
          <SlideText
            className="modern-text"
            text={fs.readFileSync(`${__dirname}/title.md`, 'utf8')}
          />
        </Slide>
        <Slide title={<div className="slide-title">Xenoblade Chronicles</div>}>
          <SlideText
            className="modern-text"
            text={fs.readFileSync(`${__dirname}/slide1.md`, 'utf8')}
          />
        </Slide>
        <Slide title={<div className="slide-title">Persona 5</div>}>
          <SlideText
            className="modern-text"
            text={fs.readFileSync(`${__dirname}/slide2.md`, 'utf8')}
          />
        </Slide>
      </Section>
    );
  }
}
