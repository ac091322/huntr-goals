import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import { huntrGoals } from "./tests/huntr_goals.e2e.js";


(async function main() {
    const options = new chrome.Options();
    options.windowSize({ width: 1350, height: 9999 });

    const driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();

    try {
        await huntrGoals(driver);
    } finally {
        await driver.quit();
    }
})();
