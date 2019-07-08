import {browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';
import {promise} from 'selenium-webdriver';

enum Cell {
  Number = 0,
  Origin = 1,
  Destination = 3,
  Select = 5,
  Update = 6
}

const UPDATE_CELL_INDEX = 6;
const NUMBER_CELL_INDEX = 6;

export class FlightViewerPageObject {
  navigateTo(): promise.Promise<any> {
    return browser.get('/flights');
  }

  getFlightsTable(): ElementFinder {
    return element(by.id('flights-table'));
  }

  getFlightsTableRows(): ElementArrayFinder {
    return this.getFlightsTable().all(by.tagName('tr'));
  }

  getFlightRow(id: number): ElementFinder {
    return element(by.id('flight-row-' + id.toString()));
  }

  async getFlight(flightId: number) {
    const flightRow = this.getFlightRow(flightId);
    return await this.extractFlightObject(flightRow);
  }

  private async extractFlightObject(flightElements: ElementFinder) {
    return {
      number: await flightElements.element(by.css('.number')).getText(),
      origin: await flightElements.element(by.css('.origin')).getText(),
      destination: await flightElements.element(by.css('.destination')).getText(),
    };
  }

  getFlightDetails(): ElementFinder {
    return element(by.css('.flight-details'));
  }

  async getFlightDetailsObject() {
    const flightDetails = this.getFlightDetails();
    return await this.extractFlightObject(flightDetails);
  }

  getFlightUpdateForm(): ElementFinder {
    return element(by.tagName('app-flight-update-form'));
  }

  updateFlight(flightId: number): promise.Promise<void> {
    return this.getFlightDetails()
      .element(by.css('.update'))
      .click();
  }

  selectFlight(flightId: number): promise.Promise<void> {
    return this.getFlightRow(flightId)
      .element(by.css('.select'))
      .click();
  }

  async getFlightFormValue() {
    const flightUpdateForm = this.getFlightUpdateForm();
    return {
      number: await flightUpdateForm.element(by.css('.number')).getAttribute('value'),
      origin: await flightUpdateForm.element(by.css('.origin')).getAttribute('value'),
      destination: await flightUpdateForm.element(by.css('.destination')).getAttribute('value'),
    };
  }

  async setText(elementFinder: ElementFinder, text: string): Promise<void> {
    await elementFinder.clear();
    await elementFinder.sendKeys(text);
  }

  async updateFlightForm(origin: string, destination: string) {
    const flightUpdateForm = this.getFlightUpdateForm();

    await this.setText(flightUpdateForm.element(by.css('.origin')), origin);
    await this.setText(flightUpdateForm.element(by.css('.destination')), destination);
  }

  saveFlightUpdate() {
    return this.getFlightUpdateForm().element(by.css('.submit')).click();
  }
}
