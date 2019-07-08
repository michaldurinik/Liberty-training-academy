import { WelcomePageObject } from '../page-objects/app.po';

describe('flights App', () => {
  let page: WelcomePageObject;

  beforeEach(() => {
    page = new WelcomePageObject();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();

    expect(await page.getParagraphText()).toEqual('Welcome to the flights app');
  });
});
