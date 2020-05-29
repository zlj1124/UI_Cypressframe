/*
 * @Descripttion: 
 * @Author: zlj
 * @Date: 2020-05-28 09:14:58
 */
let monitorLocators = require('../pageLocators/monitorPageLocators')

module.exports = {
    openUrl:function(url){
        crypto.visit(url);
    },
    search_vin:function(vin){
        cy.get(monitorLocators.INPUT)
          .type(vin)
        cy.get(monitorLocators.BUT_SEARCH) .click() 

    },

    clear_vin:function(){
        cy.get(monitorLocators.BUT_CLEAR) .click() 

    }
}