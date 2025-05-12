// this page for collect testCases from keywords

/// <reference types="cypress" />

import { KeywordLogin } from "../keywords/keywordLogin"
import { KeywordMakeSchedule } from "../keywords/keywordMakeSchedule"

const keywordMakeSchedule = new KeywordMakeSchedule()
const keywordLogin = new KeywordLogin()

describe('All Make a ASchedule Tests', function(){

    it('Scenario No. 6.4 >> Requesting a Mentoring Session for Users Who Already Have an Account (Non Mentors)', () => {
        keywordLogin.loginFirstAccountJobSeeker();
    })
    
})