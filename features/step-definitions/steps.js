const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const home=require("../pageobjects/home.page");
const furniture=require("../pageobjects/furniture.page");
const screenshot=require("../pageobjects/screenshot.page");
Given(/^I am on the Flipkart home page$/,async  () => {
  await home.homepage();
});

When(/^I click on the Furniture category$/,async () => {
	await furniture.furnitureselect();
});

When(/^I select a furniture item$/,async () => {
  await furniture.furnitureselect();
});

When(/^I take a screenshot of the payment page$/,async () => {
   await screenshot.ss();
});

