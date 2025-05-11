// this page only for save all keywords

/// <reference types="cypress" />

import { RegisterPages } from "../pages/registerPages"

const registerPages = new RegisterPages()

beforeEach(function(){
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
})

export class KeywordRegister{
    
    clickBecomeMentorButton(){
        cy.wait(3000);
        cy.get(registerPages.menjadiMentorButton).click()
        cy.contains(registerPages.applyAsMentorText).should('be.visible');
    }

    clickApplyAsMentorButton(){
        cy.wait(2000);
        cy.contains(registerPages.applyAsMentorText).should('be.visible');
        cy.contains(registerPages.applyAsMentorText).click()
        cy.get(registerPages.registerByEmailButton).should('be.exist');
        cy.get(registerPages.registerByGoogleButton).should('be.visible');
    }

    clickRegisterByEmailButton(){
        cy.get(registerPages.registerByEmailButton).click();
    }

    verifyGeneralInformationPage(){
        cy.wait(3000);
        cy.get(registerPages.mentorFullNameField).should('be.enabled');
        cy.get(registerPages.mentorEmailField).should('be.enabled');
        cy.get(registerPages.mentorPhoneNumberField).should('be.enabled');
        cy.get(registerPages.mentorLinkedinField).should('be.enabled');
        cy.get(registerPages.mentorIgUrlField).should('be.enabled');
        cy.get(registerPages.mentorInvitationCode).should('be.enabled');
        cy.get(registerPages.nextButton).should('be.visible');
        cy.get(registerPages.backButton).should('be.visible');
    }

    fillOutGeneralInformationPage(){
        this.fillFullName(fullName);
        this.fillEmail(email);
        this.fillPhoneNumber(phoneNumber);
        this.fillLinkedinUrl(linkedinUrl);
        this.fillIgUrl(igUrl);
        this.fillInvitationCode(invitationCode);
    }

    fillFullName(fullName){
        cy.wait(2000);
        cy.get(registerPages.mentorFullNameField).type(fullName);
    }

    fillEmail(email){
        cy.wait(2000);
        cy.get(registerPages.mentorEmailField).type(email);
    }

    fillPhoneNumber(phoneNumber){
        cy.get(registerPages.mentorPhoneNumberField).type(phoneNumber);
    }

    fillLinkedinUrl(linkedinUrl){
        cy.get(registerPages.mentorLinkedinField).type(linkedinUrl);
    }

    fillIgUrl(igUrl){
        cy.get(registerPages.mentorIgUrlField).type(igUrl);
    }

    fillInvitationCode(invitationCode){
        cy.get(registerPages.mentorInvitationCode).type(invitationCode);
    }

    clickNextButton(){
        cy.get(registerPages.nextButton).click();
    }

    verifyExpertisePage(){
        cy.contains(registerPages.karirBox).should('be.visible');
        cy.contains(registerPages.akademikBox).should('be.visible');
        cy.get(registerPages.needHelpButton).should('be.visible');
        cy.contains(registerPages.idButton).should('be.visible');
        cy.contains(registerPages.enButton).should('be.visible');
        cy.get(registerPages.nextButton).should('be.visible');
        cy.get(registerPages.backButton).should('be.visible');
    }

    fillOutExpertise(){
        this.fillOutCareer();
        this.fillOutAcademic();
    }

    fillOutCareer(){
        cy.wait(2000);
        cy.get(registerPages.careerCheckBox).click();
        cy.get(registerPages.expertiseListDropdown).click();
        cy.contains(registerPages.dataExpertiseOption).click();
        cy.contains(registerPages.dataAnalystExpertiseOption).click();
    }

    fillOutAcademic(){
        cy.wait(2000);
        cy.get(registerPages.academicCheckBox).click();
        cy.get(registerPages.academicListDropdown).click();
        cy.contains(registerPages.beasiswaS1Option).click();
        cy.contains(registerPages.beasiswaUnggulanOption).click();
    }
    
    verifyCareerExperiencePage(){
        cy.get(registerPages.companyNameField).should('be.visible');
        cy.wait(2000);
        cy.get(registerPages.roleLevelField).should('be.visible');
        cy.get(registerPages.roleNameField).should('be.visible');
        cy.get(registerPages.startDateField).should('be.visible');
        cy.get(registerPages.endDateField).should('be.visible');
        cy.get(registerPages.stillCurrentWorkHereCheckBox).should('be.enabled');
        cy.contains(registerPages.idButton).should('be.visible');
        cy.contains(registerPages.enButton).should('be.visible');
        cy.get(registerPages.nextButton).should('be.visible');
        cy.get(registerPages.backButton).should('be.visible');
    }

    fillOutCareerExperiences(){
        this.fillOutCompanyName();
        this.fillOutCompanyIndustry();
        this.fillOutRoleLevel();
        this.fillOutRoleName();
        this.fillOutStartDate();
        this.checkListCurrent();
    }

    fillOutCompanyName(){
        cy.wait(2000);
        cy.get(registerPages.companyNameField).type('Abc');
        cy.contains(registerPages.addCompanyName).click();
    }

    fillOutCompanyIndustry(){
        cy.wait(2000);
        cy.get(registerPages.companyIndustryField).click();
        cy.get(registerPages.companyIndustryField).type('Entertainment');
        cy.contains(registerPages.addCompanyIndustry).click();
    }

    fillOutRoleLevel(){
        cy.wait(2000);
        cy.get(registerPages.roleLevelField).click();
        cy.contains(registerPages.roleLevel).click();
    }

    fillOutRoleName(){
        cy.wait(2000);
        cy.get(registerPages.roleNameField).type('Officer');
        cy.contains(registerPages.addRoleName).click();
    }

    fillOutStartDate(){
        cy.wait(2000);
        cy.get(registerPages.startDateField).type('09/2020');
    }

    checkListCurrent(){
        cy.wait(2000);
        cy.get(registerPages.stillCurrentWorkHereCheckBox).click();
    }

    verifyAcademicsExperiencePage(){
        cy.wait(2000);
        cy.get(registerPages.institutionNameField).should('be.visible');
        cy.get(registerPages.gelarField).should('be.exist');
        cy.get(registerPages.majorField).should('be.visible');
        cy.get(registerPages.startDateAcademicField).should('be.visible');
        cy.get(registerPages.endDateAcademicField).should('be.visible');
        cy.contains(registerPages.idButton).should('be.visible');
        cy.contains(registerPages.enButton).should('be.visible');
        cy.get(registerPages.nextButton).should('be.visible');
        cy.get(registerPages.backButton).should('be.visible');
    }

    fillOutAcademicExperiences(){
        this.fillOutInstitutionName();
        this.fillOutMajor();
        this.fillOutStartDateAcademic();
        this.fillOutEndDateAcademic();
    }

    fillOutInstitutionName(){
        cy.wait(2000);
        cy.get(registerPages.institutionNameField).type('Universitas Indonesia');
        cy.contains(registerPages.addInstitutionName).click();
    }

    fillOutMajor(){
        cy.wait(2000);
        cy.get(registerPages.majorField).type('Engineering');
    }

    fillOutStartDateAcademic(){
        cy.wait(2000);
        cy.get(registerPages.startDateAcademicField).type('01/2016');
    }

     fillOutEndDateAcademic(){
        cy.wait(2000);
        cy.get(registerPages.endDateAcademicField).type('01/2020');
    }

    verifyBioPage(){
        cy.wait(2000);
        cy.get(registerPages.bioAboutMeTextArea).should('be.visible');
        cy.get(registerPages.skipButton).should('be.exist');
        cy.contains(registerPages.idButton).should('be.visible');
        cy.contains(registerPages.enButton).should('be.visible');
        cy.get(registerPages.nextButton).should('be.visible');
        cy.get(registerPages.backButton).should('be.visible');
    }

    verifyAndFillOutBio(){
        this.verifyBioPage();
        this.fillOutBioAboutMe();
    }

    fillOutBioAboutMe(){
        cy.wait(2000);
        cy.get(registerPages.bioAboutMeTextArea).type('Hi, nice to meet you!!!');
    }

    checkListTnC(){
        cy.wait(2000);
        cy.get(registerPages.checklistTnC).should('be.exist');
        cy.get(registerPages.checklistTnC).click();
        this.clickNextButton();
    }

    createPassword(){
        this.verifyCreatePasswordPage();
        this.fillOutPasswordForm();
        this.clickFinishButton();
    }

    verifyCreatePasswordPage(){
        cy.wait(2000);
        cy.get(registerPages.passwordField).should('be.visible');
        cy.get(registerPages.confirmPasswordField).should('be.visible');
        cy.get(registerPages.privacyPolicyCheckBox).should('be.exist');
        cy.get(registerPages.finishButton).should('be.visible');
        cy.contains(registerPages.idButton).should('be.visible');
        cy.contains(registerPages.enButton).should('be.visible');
        cy.get(registerPages.backButton).should('be.visible');
    }

    fillOutPasswordForm(){
        this.fillOutPassword();
        this.fillOutConfirmPassword();
        this.checkListPrivacyPolicy();
    }

    fillOutPassword(){
        cy.wait(2000);
        cy.get(registerPages.passwordField).type('Abc12345');
    }

    fillOutConfirmPassword(){
        cy.wait(2000);
        cy.get(registerPages.confirmPasswordField).type('Abc12345');
    }

    checkListPrivacyPolicy(){
        cy.wait(2000);
        cy.get(registerPages.privacyPolicyCheckBox).click();
    }

    clickFinishButton(){
        cy.wait(2000);
        cy.get(registerPages.finishButton).click();
    }

    verifySuccessfulRegisterAsMentor(){
        cy.wait(2000);
        cy.get(registerPages.modalBody).should('be.exist');
        cy.contains(registerPages.titleModal).should('be.visible');
        cy.get(registerPages.closeModalButton).should('be.exist');
        cy.get(registerPages.startExploringButton).should('be.exist');
        cy.get(registerPages.startExploringButton).click();
        cy.wait(2000);
        cy.get(registerPages.menjadiMentorButton).should('not.exist')
    }

    verifyBecomeMentorButton(){
        cy.wait(2000);
        cy.get(registerPages.menjadiMentorButton).should('not.exist')
    }

}
