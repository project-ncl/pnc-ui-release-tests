PNC UI Release Tests
====================

Automated release tests for PNC through Web UI

Prerequisites
-------------

    npm

Setup
-----

    npm install

Running Tests Locally
---------------------

### Setup

1) Set addresses of APIs to test against:

    npm config set pnc-ui-release-tests:pncUiAddress <pnc_web_ui_url>
    npm config set pnc-ui-release-tests:pncRestAddress <pnc_REST_url>

2) Update selenium webdriver:

    npm run webdriver:update

3) Start selenium server (you will want to run this in a separate terminal, or run in background):

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

Running Tests on CI
-------------------

### Setup

1) Set addresses of APIs to test against:

    npm config set pnc-ui-release-tests:seleniumAddress <selenium_server_url>

    npm config set pnc-ui-release-tests:pncUiAddress <pnc_web_ui_url>
    npm config set pnc-ui-release-tests:pncRestAddress <pnc_REST_url>

Developing Tests
----------------

_To be added later_







