# PNC UI Release Tests

Automated release tests for PNC through Web UI

## Prerequisites

    npm

## Setup

    npm install

## Setting Test Parameters


The following paramaters can be set:

| Parameter       | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| seleniumAddress | The address of the selenium server to execute on                            |
| pncUiAddress    | The address of the PNC UI to test                                           |
| pncRestAddress  | The PNC REST API backing the above UI (necessary for verifying some tests)  |
| pncUser         | The username to run tests as                                                |
| pncPassword     | the password to login with                                                  |

To set the parameters use:

    npm config set pnc-ui-release-tests:<key> <value>

Example:

    npm config set pnc-ui-release-tests:seleniumAddress http://localhost:4444

## Running Tests Locally

### Setup

Set parameters as [described above](#setting-test-parameters) except _seleniumAddress_ - ignore that param.

Update selenium webdriver:

    npm run webdriver:update

Start selenium server (you will want to run this in a separate terminal, or run in background):

    npm run webdriver:start

### Executing Tests

Execute the release test suite by:

    npm run test-suite:release

An suite of tests are available to ensure the test environment is nominal:

    npm run test-suite:environment

Executing individual tests:

    npm run test-suite --specs=<path_to_spec_file(s)>

Example:

    npm run test-suite --specs=tests/release/scenario1.spec.js,tests/environment.spec.js

## Running Tests on CI

In your CI script you will want to:

Set all params as [described above](#setting-test-parameters)

Execute the release test suite:

    npm run test-suite:release

You can also use the environment tests to check compatibility of the CI environment:

    npm run test-suite:environment

## Developing Tests

_To be added later_







