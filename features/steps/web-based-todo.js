const {Given, When, Then} = require("cucumber");
const openUrl = require('../support/action/openUrl');
const waitForSelector = require("../support/action/waitForSelector");
const checkElementExists = require("../support/check/checkElementExists");
const sendKeys = require("../support/action/sendKeys");
const clickElement = require("../support/action/clickElement");
const assert = require("assert")

Given(/^Empty ToDo list$/,async function () {
  await openUrl.call(this, "");
  await waitForSelector.call(this, ".layout")
  await waitForSelector.call(this, "h2")
  await checkElementExists.call(this, ".todos", false)
  
});


When(/^I write "([^"]*)" to text box and click to add button$/, async function (dummyTodo) {
  await sendKeys.call(this, "#add-todo-input", dummyTodo)
  await clickElement.call(this, "#add-todo-button")
});

Then(/^I should see "([^"]*)" item in ToDo list$/, async function (dummy) {
  const selector = ".layout"
  let todo = await this.page.$$eval(
    selector,
    async (todoItems, dummy) => {
      let todoItemExist = todoItems.
      find(item => item.querySelector(".todos"))
      const text = todoItemExist.querySelector("div").textContent.includes(dummy)
      console.log(text)
      return !!todoItemExist
    },
    dummy
  )
  assert.strictEqual(todo,true)
  
  await this.page.waitForTimeout(4000)
});

