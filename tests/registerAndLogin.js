module.exports = {
  'Register new': function(browser) {
    browser

      // For testing production:
      // .url('http://reinvent-io.herokuapp.com/')

      // For testing locally:
      .url('http://localhost:3000/')
      .waitForElementVisible('.auth-links')
      // .assert.attributeContains('.auth-links', 'href', '/register')
      // .click('.auth-links')
      // .waitForElementVisible('#firstName')
      // .setValue('#firstName', 'TestCaseFirstName1')
      // .setValue('#lastName', 'TestCaseFirstName1')
      // .setValue('#username', 'TestCase1')
      // .setValue('#password', 'TestPass1')
      // .setValue('#confirmPassword', 'TestPass1')
  },
  'Login Unsuccessful': function(browser) {
    browser
      // For testing production:
      // .url('http://reinvent-io.herokuapp.com/')

      // For testing locally:
      .url('http://localhost:3000/')
  }
};