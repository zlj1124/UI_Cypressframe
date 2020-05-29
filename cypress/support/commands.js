/*
 * @Descripttion: 
 * @Author: zlj
 * @Date: 2020-05-27 16:05:15
 */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload'
let Data = require("../../action/testData/data");//testdata

// file-upload
Cypress.Commands.add('uploadFile', (fileName, fileType, selector, encoding) => {
    cy.fixture(fileName,encoding).then(fileContent => {
    
      cy.get(selector).attachFile(
        { fileContent, fileName, mimeType: fileType,encoding },

      );
    });
  });


  //Use login request as a public method
Cypress.Commands.add('login',(usertype,option={})=>{
    const accountType={
        super_admin:{
            username:Data.USERNAME,
            password:Data.PASSWORD
        }
    }
    cy.request({
        url:Cypress.env('api_server'),
        method:'POST',
        body:accountType[usertype]
    }).then((resp)=>{
         //设置sessionStorage
        window.sessionStorage.setItem('token',resp.body.token)
        window.sessionStorage.setItem('profile',resp.body.profile)

    })

})