// this page for collect testCases from keywords

/// <reference types="cypress" />

import { KeywordExplore } from "../keywords/keywordExplore"

const keywordExplore = new KeywordExplore()

const keywordsearch = 'Backend Tester'

describe('Explore Tests', function(){

    it('Scenario No. 3.1 >> Searching with a Valid Name/Company/Role/Industry/University/Major/Topic Keyword and Returning Results.', () => {
        keywordExplore.goToExploreTab();
        keywordExplore.searchOnExploreTab(keywordsearch);
        keywordExplore.verifySearchResults();
    })
    
})