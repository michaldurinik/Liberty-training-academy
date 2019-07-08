// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const baseConfig = require('./protractor.conf');
const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
  ...baseConfig.config,

  capabilities: {
    'browserName': 'chrome',
    'acceptInsecureCerts': true,
    'chromeOptions': {
      'args': [
        '--headless',
        '--disable-gpu',
        '--window-size=1690,1000',
        '--no-sandbox',
      ]
    }
  },
};
