// this page for collect testCases from keywords

/// <reference types="cypress" />

import { KeywordMySession } from "../keywords/keywordMySession"
import { KeywordLogin } from "../keywords/keywordLogin"

const keywordMySession = new KeywordMySession()
const keywordLogin = new KeywordLogin()

describe('My Session Tests', function(){

    it('Scenario No. 4.2 >> Accessing the My Sessions Tab While Log In and Having No Sessions.', () => {
        keywordLogin.loginFirstAccountJobSeeker();
        keywordMySession.goToMySession();
        keywordMySession.verifyMySessionWithoutSession();
    })

})