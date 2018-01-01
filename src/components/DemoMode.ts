import * as $ from 'jquery';

class Demo {
  private fn: any;

  constructor() {
    this.fn = $.fn;
  }

  public runDemoMode = async () => {
    await this.scrollThroughSection();
    await this.scrollThroughSection();
    await this.scrollThroughSection();
  };

  public scrollThroughSection = async () => {
    await this.scrollRight(1000);
    await this.scrollRight(1000);
    await this.scrollRight(1000);

    await this.scrollDown(1500);
  };

  public scrollDown = (timeout: number): Promise<void> => {
    return new Promise(resolve => {
      setTimeout(() => {
        this.fn.fullpage.moveSectionDown();
        resolve();
      }, timeout);
    });
  };

  public scrollRight = (timeout: number): Promise<void> => {
    return new Promise(resolve => {
      setTimeout(() => {
        this.fn.fullpage.moveSlideRight();
        resolve();
      }, timeout);
    });
  };
}

export const DemoMode = new Demo();
