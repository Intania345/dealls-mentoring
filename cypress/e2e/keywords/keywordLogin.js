// this page only for save all keywords

/// <reference types="cypress" />

import { LoginPages } from "../pages/loginPages"

const loginPages = new LoginPages()

const nameText = 'Mentor';

beforeEach(function(){
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
})

export class KeywordLogin{
    
    goToLoginPage(){
        cy.wait(2000);
        cy.get(loginPages.loginButton).should('be.visible');
        cy.get(loginPages.loginButton).click();
    }

    fillOutEmailLogin(email){
        cy.wait(2000);
        cy.get(loginPages.emailLoginField).should('be.visible');
        cy.get(loginPages.emailLoginField).type(email);
    }

    fillOutPasswordLogin(password){
        cy.wait(2000);
        cy.get(loginPages.passwordLoginField).should('be.visible');
        cy.get(loginPages.passwordLoginField).type(password);
    }

    clickSignInButton(){
        cy.wait(2000);
        cy.get(loginPages.signInButton).should('be.visible');
        cy.get(loginPages.signInButton).click();
    }

    verifySuccessLogin(){
        cy.wait(2000);
        cy.get(loginPages.nameTextDashboard).should('contain', `Hi, ${nameText}!`);
        cy.get(loginPages.imgProfileIcon).should('be.exist');
    }

    loginFirstAccountJobSeeker(){
        this.goToLoginPage();
        this.fillOutEmailLogin('jobseeker@email.com');
        this.fillOutPasswordLogin('Abc12345');
        this.clickSignInButton();
    }

}