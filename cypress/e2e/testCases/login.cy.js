// this page for collect testCases from keywords

/// <reference types="cypress" />

import { KeywordLogin } from "../keywords/keywordLogin"

const keywordLogin = new KeywordLogin()

describe('All Login Tests', function(){

    it('Login with Valid Credentials', () => {
    
        keywordLogin.clickRegisterButton();

    })
    
})