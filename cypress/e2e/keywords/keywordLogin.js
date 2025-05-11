// this page only for save all keywords

/// <reference types="cypress" />

import { LoginPages } from "../pages/loginPages"

const loginPages = new LoginPages()

beforeEach(function(){
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
})

export class KeywordLogin{
    
    clickRegisterButton(){
        cy.screenshot()
        cy.get(loginPages.daftarButton).click()
        cy.screenshot();
    }


}