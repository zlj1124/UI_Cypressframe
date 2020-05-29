/*
 * @Descripttion: 
 * @Author: zlj
 * @Date: 2020-05-27 16:28:16
 */
let Data = require("../../action/testData/data");//testdata
var signInPage = require("../../action/pageActions/loginPage");//login
var monitorPage = require("../../action/pageActions/monitorPage")//monitor action
let monitorPageLocators = require("../../action/pageLocators/monitorPageLocators")//monitor element

describe('Search a vin',function(){
    it('Should show the searched vin',function(){
        //UI login
        signInPage.openUrl(Data.URL)
        cy.url().should('include','login');
        signInPage.login(Data.USERNAME,Data.PASSWORD);
        cy.url().should('include', 'monitor');

        //Verify the search for vin, 
        //and the map will display basic information when selected
        monitorPage.search_vin(Data.MONITOR['vin'])
        cy.get(monitorPageLocators.LIST_One).click()
        cy.get('h3').should('contain',Data.MONITOR['vin'])
        
        // Verify clear vin
        monitorPage.clear_vin()
        cy.get(monitorPageLocators.INPUT).should('not.have.text' )
    
    })
})