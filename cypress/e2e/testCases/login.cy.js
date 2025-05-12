// this page for collect testCases from keywords

/// <reference types="cypress" />

import { KeywordLogin } from "../keywords/keywordLogin"
import { KeywordRegister } from "../keywords/keywordRegister"

const keywordLogin = new KeywordLogin()
const keywordRegister = new KeywordRegister()

describe('Login Tests', function(){

    it('Scenario No. 2.2 >> Successful Login with Correct Credentials', () => {
        keywordLogin.goToLoginPage();
        keywordLogin.fillOutEmailLogin('mentordabest@email.com');
        keywordLogin.fillOutPasswordLogin('Abc12345');
        keywordLogin.clickSignInButton();
        keywordLogin.verifySuccessLogin();
        keywordRegister.verifyBecomeMentorButton();
    })
    
})