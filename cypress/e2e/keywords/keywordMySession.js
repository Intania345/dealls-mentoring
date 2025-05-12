// this page only for save all keywords

/// <reference types="cypress" />

import { MySessionPages } from "../pages/mySessionPages"

const mySessionPages = new MySessionPages()

beforeEach(function(){
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
})

export class KeywordMySession{

    goToMySession(){
        cy.wait(3000);
        cy.contains(mySessionPages.mySessionTab).should('be.visible');
        cy.contains(mySessionPages.mySessionTab).click();
    }

    verifyMySessionWithoutSession(){
        cy.wait(2000);
        cy.contains(mySessionPages.exploreMentorButtonMySession, {timeout : 5000}).should('be.visible');
    }

}