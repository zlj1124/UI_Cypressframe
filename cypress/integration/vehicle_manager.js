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
   
    beforeEach(() => {

        cy.log('runs once after all tests in the block');
  
        })
   

    afterEach(()=>{
        cy.log("after each")

    })
 
    it('Verify the search for vin',function(){
        //Verify the search for vin
        vehicelPage.search_vin(Data.MONITOR['vin'])
        cy.get(vehicelPageLocators.TRUCK_LIST).should('contain',Data.MONITOR['vin'])
      })

    it('Verify clear vin',function(){
        //Verify clear vin
        vehicelPage.clear_vin()
        cy.get(vehicelPageLocators.INPUT).should('not.have.text')

    })  
       
    it('Verify import file sucess',function(){
        //import file sucess
        vehicelPage.import_file()
        cy.get(vehicelPageLocators.IMPOET_MSG).should('contain','导入成功')

    })

    it('Verify create truck success',function(){
        vehicelPage.create_truck(
            Data.TRUCK['vin'],
            vehicelPageLocators.MODE_SELECT,
            vehicelPageLocators.EMISSIONLEVEL_SELECT
            )
        cy.get(vehicelPageLocators.CREATERUCK_MSG).should('contain.text','新增成功')       
        })

  
    after(() => {
        cy.log('runs once after all tests in the block');
      
        cy.exec("python3 ./cypress/fixtures/db.py -d d")//调python数据库模块，清除添加的数据
           .as("get_result")
           .then(function(result) {
               cy.log(result.stdout)
               // json解析成object
            //    const res_body = JSON.parse(result.stdout)
            //    //  示例：打印出来
            //    cy.log(res_body)
            //    // 断言 返回结果
            //    expect(res_body.length).to.be.at.least(1)  
       })

       })  

    })
    









        
   
