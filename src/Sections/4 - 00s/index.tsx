import * as fs from 'fs';
import * as React from 'react';

import { ContentSection } from '../../components/ContentSection';
import { Section } from '../../components/Section';
import { Slide } from '../../components/Slide';
import { SlideText } from '../../components/SlideText';
import * as pikagif from '../../images/00s-pikachu.gif';

declare const __dirname: string;

export class NoughtiesSection extends ContentSection {
  public render() {
    return (
      <Section
        className="noughties-section"
        upArrow
        rightArrow
        isRightAnimating={!this.state.rememberSeen}
        leftArrow={this.state.rememberSeen}
        downArrow={this.state.rememberSeen}
        onArrowClicked={this.onArrowClick}
      >
        <Slide title={<div className="slide-title">JRPGs in the late 1990s to 2000s</div>}>
          <SlideText
            className="ffvii-text"
            text={fs.readFileSync(`${__dirname}/title.md`, 'utf8')}
          />
        </Slide>
        <Slide title={<div className="slide-title">Final Fantasy VII</div>}>
          <SlideText
            className="ffvii-text"
            text={fs.readFileSync(`${__dirname}/slide1.md`, 'utf8')}
          />
        </Slide>
        <Slide id="S4S3" title={<div className="slide-title">Pokémon</div>} hasBackground>
          <img className="small-pika" src={pikagif} />
          <SlideText
            className="ffvii-text"
            text={fs.readFileSync(`${__dirname}/slide2.md`, 'utf8')}
          />
        </Slide>
      </Section>
    );
  }
}
