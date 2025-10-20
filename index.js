import { Builder } from "selenium-webdriver";
import { huntrGoals } from "./tests/huntr_goals.e2e.js";
import "dotenv/config";


(async function main() {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
        await huntrGoals(driver);
    } finally {
        await driver.quit();
    }
})();
