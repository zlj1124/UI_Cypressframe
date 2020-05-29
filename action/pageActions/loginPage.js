/*
 * @Descripttion: 
 * @Author: zlj
 * @Date: 2020-05-27 16:24:32
 */
let loginLocators = require('../pageLocators/loginPageLocators');
let Data = require("../../action/testData/data");//testdata

module.exports = {
	openUrl: function (url) {
		cy.visit(url);
	},
	login: function (username, password) {

		cy.get(loginLocators.USERNAME)
			.type(username);
		cy.get(loginLocators.PASSWORD)
			.type((password));
		cy.get(loginLocators.LOGIN_BUTTON)
			.click();

    },

};

