module.exports = {
  // Test for all front page buttons
  'Navigate front page': function(browser) {
    browser
      // For testing production:
      // .url('http://reinvent-io.herokuapp.com/')

      // For testing locally:
      .url('http://localhost:3000/')
      .waitForElementVisible('.logo-text')
      .assert.containsText('.logo-text', 'Re:invent')
      .click('.register')
      .waitForElementVisible('.auth-button')
      .assert.containsText('.auth-button', 'SIGN UP')
      .click('.btn-flat')
      .waitForElementVisible('.logo-text')
      .click('.register')
      .waitForElementVisible('.auth-button')
      .click('.grey-text > a')
      .waitForElementVisible('.auth-button')
      .assert.containsText('.auth-button', 'LOG IN')
      .click('.btn-flat')
      .waitForElementVisible('.logo-text')
      .click('.login')
      .waitForElementVisible('.auth-button')
      .click('.grey-text > a')
      .waitForElementVisible('.auth-button')
      .assert.containsText('.auth-button', 'SIGN UP')
  },
  // Test for unsuccessful login attempts
  'Login Unsuccessful': function(browser) {
    browser
      // For testing production:
      // .url('http://reinvent-io.herokuapp.com/')

      // For testing locally:
      .url('http://localhost:3000/login')
      .waitForElementVisible('.auth-button')
      .click('.auth-button')
      .assert.containsText('#username ~ .red-text', 'Please enter your username')
      .assert.containsText('#password ~ .red-text', 'Please enter your password')
      .setValue('#username', 'WrongName')
      .click('.auth-button')
      .assert.containsText('#username ~ .red-text', '')
      .assert.containsText('#password ~ .red-text', 'Please enter your password')
      .clearValue('#username')
      .setValue('#password', 'badpass')
      .click('.auth-button')
      .assert.containsText('#username ~ .red-text', 'Please enter your username')
      .assert.containsText('#password ~ .red-text', '')
      .setValue('#username', 'WrongName')
      .setValue('#password', 'badpass')
      .click('.auth-button')
      .assert.containsText('#username ~ .red-text', 'Username does not exist')
  },
  // Attempt to navigate to blocked pages without loggin in
  'Restricted navigation': function(browser) {
    browser
      // For testing production:
      // .url('http://reinvent-io.herokuapp.com/')

      // For testing locally:
      .url('http://localhost:3000/')
      .assert.containsText('.logo-text', 'Re:invent')
      .url('http://localhost:3000/news-feed')
      .assert.containsText('.logo-text', 'Re:invent')
      .url('http://localhost:3000/ideas/active')
      .assert.containsText('.logo-text', 'Re:invent')
      .url('http://localhost:3000/ideas/closed')
      .assert.containsText('.logo-text', 'Re:invent')
      .url('http://localhost:3000/ideas/trending')
      .assert.containsText('.logo-text', 'Re:invent')
      .url('http://localhost:3000/ideas/calendar')
      .assert.containsText('.logo-text', 'Re:invent')
      .url('http://localhost:3000/ideas/resources')
      .assert.containsText('.logo-text', 'Re:invent')
      .url('http://localhost:3000/ideas/profile')
      .assert.containsText('.logo-text', 'Re:invent')
  },
  // New registration with Login
  'Register new': function(browser) {
    browser

      // For testing production:
      // .url('http://reinvent-io.herokuapp.com/')

      // For testing locally:
      .url('http://localhost:3000/')
      .waitForElementVisible('.auth-links')
      .click('.register')
      .waitForElementVisible('#firstName')
      .setValue('#firstName', 'TestCaseFirstName1')
      .setValue('#lastName', 'TestCaseLastName1')
      .setValue('#username', 'TestCase1')
      .setValue('#password', 'TestPass1')
      .setValue('#confirmPassword', 'TestPass1')
      .assert.containsText('.auth-button', 'SIGN UP')
      .assert.value('#username', 'TestCase1')
      .click('.auth-button')
      .click('.auth-button')
      .assert.urlContains('login')
      .waitForElementVisible('.auth-button')
      .setValue('#username', 'TestCase1')
      .setValue('#password', 'TestPass1')
      .click('.auth-button')
      .waitForElementVisible('.pageTitle')
      .assert.containsText('.pageTitle > h1', 'Latest News')
  },
};