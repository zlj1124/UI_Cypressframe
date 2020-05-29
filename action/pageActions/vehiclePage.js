/*
 * @Descripttion: 
 * @Author: zlj
 * @Date: 2020-05-28 10:28:44
 */
let vehiclePageLocators = require('../../action/pageLocators/vehiclePageLocators')
import 'cypress-file-upload'

module.exports = {

    search_vin:function(vin){
        cy.get(vehiclePageLocators.INPUT_TEXT)
          .type(vin)
        cy.get(vehiclePageLocators.BUT_SEARCH) .click() 

    },

    clear_vin:function(){
        cy.get(vehiclePageLocators.BUT_CLEAR) .click() 

    },
 
    import_file:function(){
        
        //文件上传
        const fileName = 'truck.xlsx';
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        const selector = 'input[type="file"]'
        const encoding = 'base64';

        cy.contains(vehiclePageLocators.IMORT_BUT).click()
        cy.uploadFile(fileName,fileType,selector,encoding,)  
    },

    create_truck: function(vin,vehRegisterMode,emissionLevelType,){
        cy.contains(vehiclePageLocators.ADD_TRUCK).click()
        cy.get(vehiclePageLocators.VIN).type(vin)
        cy.get(vehiclePageLocators.VEHREGISTERMODE).click()
          .contains(vehRegisterMode).click()
        cy.get(vehiclePageLocators.EMISSIONLEVELTYPE).click()
          .contains(emissionLevelType).click()
        cy.get(vehiclePageLocators.BUT_CREATTRUCK).click()  

    }
    
}