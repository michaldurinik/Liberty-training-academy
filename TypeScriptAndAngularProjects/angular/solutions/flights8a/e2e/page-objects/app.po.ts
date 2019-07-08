import { browser, by, element } from 'protractor';

export class WelcomePageObject {
  async navigateTo() {
    await browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-welcome h2')).getText();
  }
}
