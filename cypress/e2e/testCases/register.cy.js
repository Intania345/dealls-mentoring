// this page for collect testCases from keywords

/// <reference types="cypress" />

import { KeywordRegister } from "../keywords/keywordRegister"
const { faker } = require('@faker-js/faker');

const keywordRegister = new KeywordRegister()


describe('All Register Tests', function(){

    it('Scenario No. 1.3 >> Register (Become a Mentor with Valid Information', () => {
        keywordRegister.clickBecomeMentorButton();
        keywordRegister.clickApplyAsMentorButton();
        keywordRegister.clickRegisterByEmailButton();
        keywordRegister.verifyGeneralInformationPage();
        keywordRegister.fillFullName(faker.person.fullName());
        keywordRegister.fillEmail(faker.internet.email());
        keywordRegister.fillPhoneNumber('62111111111111');
        keywordRegister.fillLinkedinUrl('https://www.linkedin.com/in/0/');
        keywordRegister.fillIgUrl('https://www.instagram.com/a/');
        keywordRegister.fillInvitationCode('ABCDEFGH')
        keywordRegister.clickNextButton();
        keywordRegister.verifyExpertisePage();
        keywordRegister.fillOutExpertise();
        keywordRegister.clickNextButton();
        keywordRegister.verifyCareerExperiencePage();
        keywordRegister.fillOutCareerExperiences();
        keywordRegister.clickNextButton();
        keywordRegister.verifyAcademicsExperiencePage();
        keywordRegister.fillOutAcademicExperiences();
        keywordRegister.clickNextButton();
        keywordRegister.verifyAndFillOutBio();
        keywordRegister.clickNextButton();
        keywordRegister.checkListTnC();
        keywordRegister.createPassword();
        keywordRegister.verifySuccessfulRegisterAsMentor();
    })
    
})