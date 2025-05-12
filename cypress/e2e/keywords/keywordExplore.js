// this page only for save all keywords

/// <reference types="cypress" />

import { ExplorePages } from "../pages/explorePages"

const explorePages = new ExplorePages()

beforeEach(function(){
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
})

export class KeywordExplore{

    goToExploreTab(){
        cy.wait(2000);
        cy.contains(explorePages.exploreTab).should('be.exist');
        cy.contains(explorePages.exploreTab).click();
    }

    searchOnExploreTab(keyword){
        cy.wait(2000);
        cy.get(explorePages.searchMentorBar).should('be.visible');
        cy.get(explorePages.searchMentorBar).type(keyword);
    }

    verifySearchResults(){
        cy.wait(2000);
        cy.contains('Backend Tester').should('be.visible');
    }

    searchMentorsNameAndGoToMentorDetail(){
        this.searchMentorName();
        this.goToMentorDetail();
        this.verifyMentorDetail();
    }

    searchMentorName(){
        cy.wait(4000);
        cy.contains(explorePages.exploreTab).click();
        cy.get(explorePages.searchMentorBar).type('Irvan');
        cy.contains('Irvan').should('be.visible');
    }

    goToMentorDetail(){
        cy.wait(2000);
        cy.contains('Irvan').click();
    }

    verifyMentorDetail(){
        cy.wait(2000);
        cy.contains('Irvan').should('be.visible');
    }



}