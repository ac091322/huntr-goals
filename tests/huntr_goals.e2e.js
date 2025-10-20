import { By, until } from "selenium-webdriver";
import "dotenv/config";
import { pause } from "../utils/pause";


async function huntrGoals(driver) {
    console.log("🚀 Starting it up... 🚀");
    await driver.get("https://huntr.co/track/goals/current");

    const fieldEmail = await driver.wait(
        until.elementLocated(By.css('input[type="email"]')),
        5_000
    );
    await fieldEmail.sendKeys(process.env.EMAIL);

    const fieldPassword = await driver.wait(
        until.elementLocated(By.css('input[type="password"]')),
        5_000
    )
    await fieldPassword.sendKeys(process.env.PASSWORD);

    const buttonLogin = await driver.wait(
        until.elementLocated(By.xpath('//button[input[@aria-label="submit" and @value="Log In"]]')),
        5_000
    );
    await buttonLogin.click();

    const menuGoals = await driver.wait(
        until.elementLocated(By.xpath('//p[text()="Goals"]')),
        10_000
    );
    await driver.wait(until.elementIsVisible(menuGoals), 10_000);
    await menuGoals.click();

    const plusButtonXpath = '//div[contains(@class, "UserGoalBox__BoxSection-sc-otbafz-2")][.//p[contains(text(), "Y2 Universal Goal #2: Submit 15 High Quality Applications Per Week")]]//div[contains(@class, "AddButtonSquare-sc-n85sy6-0")]';

    const plusButton = await driver.wait(
        until.elementLocated(By.xpath(plusButtonXpath)),
        5000
    );
    await driver.wait(until.elementIsVisible(plusButton), 10_000);
    await pause(10_000);

    let buttonCreate = await driver.wait(
        until.elementLocated(
            By.xpath('//button[input[@aria-label="submit" and @value="Create"]]')
        ),
        5000
    );
    await driver.wait(until.elementIsVisible(buttonCreate), 10_000);

    await pause(10_000);
    await buttonCreate.click();

    await pause(10_000);
}


export { huntrGoals }
