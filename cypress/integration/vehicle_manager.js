/*
 * @Descripttion: 
 * @Author: zlj
 * @Date: 2020-05-28 10:27:05
 */
let Data = require("../../action/testData/data");//testdata
var vehicelPage = require("../../action/pageActions/vehiclePage")
let vehicelPageLocators = require("../../action/pageLocators/vehiclePageLocators")


describe('vehicle manager page',function(){
    before(function(){
         //reuqest login
         cy.login('super_admin')
         cy.visit('/car')
         cy.url().should('include','/car')

    })
    
    it.skip('Verify the search for vin',function(){
        //Verify the search for vin
        vehicelPage.search_vin(Data.MONITOR['vin'])
        cy.get(vehicelPageLocators.TRUCK_LIST).should('contain',Data.MONITOR['vin'])
      })

    it.skip('Verify clear vin',function(){
        //Verify clear vin
        vehicelPage.clear_vin()
        cy.get(vehicelPageLocators.INPUT).should('not.have.text')

    })  
       
    it.skip('Verify import file sucess',function(){
        //import file sucess
        vehicelPage.import_file()
        cy.get(vehicelPageLocators.IMPOET_MSG).should('contain','导入成功')

    })

    it.skip('Verify create truck success',function(){
        vehicelPage.create_truck(
            Data.TRUCK['vin'],
            vehicelPageLocators.MODE_SELECT,
            vehicelPageLocators.EMISSIONLEVEL_SELECT
            )
        cy.get(vehicelPageLocators.CREATERUCK_MSG).should('contain.text','新增成功')       
        })

    })
    









        
   
