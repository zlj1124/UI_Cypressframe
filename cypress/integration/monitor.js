/*
 * @Descripttion: 
 * @Author: zlj
 * @Date: 2020-05-27 16:28:16
 */
let Data = require("../../action/testData/data");//测试数据
var signInPage = require("../../action/pageActions/loginPage");//登录

describe('Search a vin',function(){
    it('Should show the searched vin',function(){
        signInPage.openUrl(Data.URL)
        cy.url().should('include','login');
        signInPage.login(Data.USERNAME,Data.PASSWORD);
    })
})