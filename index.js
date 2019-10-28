const { Builder, By } = require('selenium-webdriver');

// chrome_options.add_experimental_option('prefs',  {
//   "download.default_directory": download_dir,
//   "download.prompt_for_download": False,
//   "download.directory_upgrade": True,
//   "plugins.plugins_disabled": ["Chrome PDF Viewer"]
//   }
// )

const chrome = require('selenium-webdriver/chrome');

(async function example() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(
      { "plugins.always_open_pdf_externally": true }
    )
    .build();
  try {
    await driver.get('https://github.com/nicktaras/node_selenium/blob/master/pdf_test.pdf');
    await driver.findElement(By.id('raw-url')).click();
    await driver.sleep(10000);
  } finally {
    await driver.quit();
  }
})();