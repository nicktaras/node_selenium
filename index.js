const { Builder, By, until } = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
let chromeOptions = new chrome.Options()
  .addArguments('disable-infobars')
  .setUserPreferences({ credential_enable_service: false });

// other options:
// 'start-fullscreen'
// 'headless'

(async function example() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();
  try {
    await driver.get('https://github.com/nicktaras/node_selenium/blob/master/pdf_test.pdf');
    await driver.wait(until.elementLocated(By.id('raw-url')), 15000, 'Looking for element');
    await driver.findElement(By.id('raw-url')).click();
    await driver.sleep(5000);
  } finally {
    await driver.quit();
  }
})();