const {Given, When, Then} = require("cucumber");
const openUrl = require('../support/action/openUrl');
const waitForSelector = require("../support/action/waitForSelector");
const checkElementExists = require("../support/check/checkElementExists");


Given(/^Empty ToDo list$/,async function () {
  await openUrl.call(this, "/");
  await waitForSelector.call(this, ".layout")
  await waitForSelector.call(this, "h2")
  await checkElementExists.call(this, ".todos", false)
  
});

When(/^I write "([^"]*)" to (.*) and click to (.*)$/, async function (dummyTodo) {
  await sendKeys.call(this, "#add-todo-input", dummyTodo)
});
Then(/^I should see "([^"]*)" item in ToDo list$/, async function () {

});