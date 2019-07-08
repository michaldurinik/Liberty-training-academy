import {browser, ElementFinder, ExpectedConditions, protractor} from 'protractor';
import './for-each-async';

declare global {
  interface ElementFinder {
    setText(value: string): Promise<ElementFinder>;

    scrollTo(): Promise<ElementFinder>;

    waitAndGetText(): Promise<string>;

    isChecked(): Promise<boolean>;
  }
}

ElementFinder.prototype.setText = setText;

export async function setText(value: string) {
  this.clear();

  const lines = value.split('\n');
  await lines.forEachAsync(async (line, index) => {
    await this.sendKeys(line);
    if (index < lines.length - 1) {
      await this.sendKeys(protractor.Key.ENTER);
    }
  });

  return this;
}

ElementFinder.prototype.scrollTo = scrollTo;

export async function scrollTo() {
  await browser.wait(ExpectedConditions.presenceOf(this), 10000);
  const location = await this.getLocation();
  await browser.driver.executeScript(`window.scrollTo(${location.x}, ${location.y});`);
  return this;
}

ElementFinder.prototype.waitAndGetText = waitAndGetText;

export async function waitAndGetText() {
  await browser.waitForAngular();
  return await this.getText();
}

ElementFinder.prototype.isChecked = isChecked;

export async function isChecked() {
  await browser.waitForAngular();
  return (await this.getAttribute('checked')) === 'true';
}

