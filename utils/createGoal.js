import { By, until } from "selenium-webdriver";
import { pause } from "./pause.js";


export async function createGoal(driver, currentGoalButton) {
    await pause(2_000);

    await driver.wait(until.elementIsVisible(currentGoalButton), 10_000);
    await driver.actions({ async: true })
        .move({ origin: currentGoalButton })
        .pause(200)
        .click()
        .perform();

    const createButton = await driver.wait(
        until.elementLocated(By.xpath('//button[input[@value="Create"]]')),
        5_000
    );
    await driver.wait(until.elementIsVisible(createButton), 10_000);
    await createButton.click();

    await pause(2_000);
}
