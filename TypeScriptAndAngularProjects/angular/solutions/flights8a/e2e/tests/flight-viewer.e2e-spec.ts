///<reference path="../page-objects/app.po.ts"/>
import {WelcomePageObject} from '../page-objects/app.po';
import {FlightViewerPageObject} from '../page-objects/flight-viewer.po';
import {browser} from 'protractor';

describe('Flight Booking App', () => {
  let page: FlightViewerPageObject;

  beforeEach(async () => {
    page = new FlightViewerPageObject();

    await page.navigateTo();
  });

  it('should display table with 21 rows', async () => {
    expect(await page.getFlightsTableRows().count()).toEqual(21);
  });

  it('should display correct details for course 105', async () => {
    const flight = await page.getFlight(105);

    expect(flight.number).toEqual('105');
    expect(flight.origin).toEqual('Belfast City');
    expect(flight.destination).toEqual('London Gatwick');
  });

  it('should show details for course 201', async () => {
    await page.selectFlight(201);

    await browser.waitForAngular();

    const flight = await page.getFlightDetailsObject();

    expect(flight.number).toEqual('201');
    expect(flight.origin).toEqual('Belfast City');
    expect(flight.destination).toEqual('Birmingham');
  });

  it('should show update form for course 205', async () => {
    await page.selectFlight(205);

    await page.updateFlight(205);

    const flight = await page.getFlightFormValue();

    expect(flight.number).toEqual('205');
    expect(flight.origin).toEqual('Belfast City');
    expect(flight.destination).toEqual('Birmingham');
  });

  async function updateFlightForm(origin: string, destination: string) {
    await page.updateFlightForm(origin, destination);
    await page.saveFlightUpdate();
  }

  it('should update flight correctly', async () => {
    await page.selectFlight(301);
    await page.updateFlight(301);

    await updateFlightForm('AAA', 'BBB');

    const updatedFlight = await page.getFlight(301);
    expect(updatedFlight.number).toEqual('301');
    expect(updatedFlight.origin).toEqual('AAA');
    expect(updatedFlight.destination).toEqual('BBB');
  });
});
