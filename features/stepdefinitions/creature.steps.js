'use strict';
const {defineSupportCode} = require('cucumber');
const pool = [];
const hand = [];

defineSupportCode(function({When, Then, Given}) {

	Given('I have {arg1:stringInDoubleQuotes} in my mana pool', function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback();
	});

	Given('I have {arg1:stringInDoubleQuotes} in my hand', function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		hand.push('Savannah Lions');
		callback();
	});

	When('I cast {arg1:stringInDoubleQuotes}', function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback();
	});

	Then('I should see {arg1:stringInDoubleQuotes} on the board', function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback();
	});
});