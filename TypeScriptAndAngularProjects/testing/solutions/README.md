This folder contains training materials for learning
TDD in JavaScript.

npm is used to manage the packages required for running
the tests. Key packages are,

- Jasmine - how the tests are defined
- Karma - the tool that runs the tests
  - Webpack - configured in Karma so the JS can use module
  - Babel - configured in karma-webpack so the code can be ES 2017
  - Launchers - Chrome, IE, PhantomJS - browsers that Karma will 
                run tests inside of

## Running Tests

- Run 'npm install'
- Run 'npm test' for a single test run
- Run 'npm run test-watch' to watch the folder continuously

