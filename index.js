const { Builder, By, until, Key } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('safari').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.sleep(5000);
    await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
  } finally {
    await driver.quit();
  }
})();