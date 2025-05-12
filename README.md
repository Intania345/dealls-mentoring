# dealls-mentoring
this repository for save all codes for QA challenges.

# Challenge 2: UI Automation - Web Scenarios (Cypress/Playwright)

This document contains a UI automation scripts created for functional automation code using modern JavaScript based frameworks (on web based).


## Chosen Framework
**Cypress**

## Automated Scenario
The scenario automated in this script is:
* Register feature (**`cypress/e2e/testCases/register.cy.js`**): attempting to register an account to become a mentor (in the PDF document: scenario no. 1.3).
* Login feature (**`cypress/e2e/testCases/login.cy.js`**): the case for log in with an existing account that is already a mentor (in the PDF document: scenario no. 2.2).
* Explore feature (**`cypress/e2e/testCases/explore.cy.js`**): the case for searching for a mentor on the explore feature (in the PDF document: scenario no. 3.1).


## Project Structure
```
├── cypress/
│   ├── e2e/                # Contains test script files
|       ├── keywords        # Contains a collection of classes that will be used as testCase
|       ├── pages           # Contains a collection of element locators
|       ├── testCasess      # Contains a collection of class steps source from the keyword file
│   ├── fixtures/           
│   ├── reports/            
│   └── ...
├── package.json
├── package-lock.json
└── README.md
```


## How to Run the Script
1.  **Ensure Cypress is installed.** 
    But first, you have to install Node.js, and then install Cypress.
    Check the version of cypress with:
    ```bash
    cypress --version
    ```
    If not yet installed, run:
    ```bash
    npm init -y
    ```
    then:
    ```bash
    npm install cypress --save-dev
    ```
    or
    ```bash
    npm install cypress
    ```
2.  **Do not forget to install the package of:**
    - mochawesome (for collect the report)
    ```bash
    npm i --save-dev cypress-mochawesome-reporter
    ```
    or:
    ```bash
    npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
    ```
    or:
    ```bash
    npm install --save-dev mochawesome
    ```
    - faker (for generate string or other things)
    ```bash
    npm install --save-dev @faker-js/faker
    ```
2.  **Run the Cypress Test Runner with Studio:**
    ```bash
    npx cypress open
    ```
    This will open the Cypress UI, choose the E2E Testing then choose Chrome browser.
    You can find and run the file in Specs folder > cypress\e2e > testCases
    for the example file is `register.cy.js` script.
3.  **Alternatively, you can run from the command line:**
    Open the terminal or command prompt then type this for spesific case:
    ```bash
    npx cypress run --spec 'cypress/e2e/testCases/register.cy.js'
    ```
    Replace `'cypress/e2e/testCases/[file_name_of_testcase].cy.js'` with the correct path for another script file. The example is:
    For login case:
    ```bash
    npx cypress run --spec 'cypress/e2e/testCases/login.cy.js'
    ```
    For explore case:
    ```bash
    npx cypress run --spec 'cypress/e2e/testCases/explore.cy.js'
    ```


## Script Code Overview
Instead of including the entire long script within this `README`, which can make it length and hard to read, this section provides a steps overview.

sample for register script automated case:
### `cypress/e2e/testCases/register.cy.js`:

This script automates the user registration process to become a mentor. It steps:
* Open the dashboard of Dealls! Website
*	Go To Mentoring menu, then click the Mentoring menu
*	Click the “Become a Mentor” / “Menjadi Mentor” button
*	Click the “Apply as Mentor” button in the next page
*	Click the “Daftar dengan Email” / “Sign Up with Email” button
*	Fill out all data in the form with valid information until finish
*	Verify successful register as Mentor by checking the UI of page

**For the complete and detailed implementation, please see the `cypress/e2e/testCases/register.cy.js` file.**


sample for login script automated case:
### `cypress/e2e/testCases/login.cy.js`:

This script automates the login process for existing mentor accounts. It steps:
*	Open the dashboard of Dealls! Website
*	Go To Mentoring menu, then click the Mentoring menu
*	Click the “Login” / “Masuk” button
*	Fill the Email field with valid email address (that has been registered)
*	Fill the Password field with valid password
*	Click Sign In button
*	Verify successful login

**For the complete and detailed implementation, please see the `cypress/e2e/testCases/login.cy.js` file.**


sample for explore script automated case:
### `cypress/e2e/testCases/explore.cy.js`:

This script automates the process of searching for name of mentors using the explore feature. It steps:
*	Open the dashboard of Dealls! Website
*	Go To Mentoring menu, then click the Mentoring menu
*	Click Explore tab in Mentoring page
*	Type the name on search bar, then do enter
*	Verify search results

**For the complete and detailed implementation, please see the `cypress/e2e/testCases/explore.cy.js` file.**

This is the end of the files.
Thank you.
