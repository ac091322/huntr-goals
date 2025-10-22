import { By, until } from "selenium-webdriver";
import "dotenv/config";
import { pause } from "../utils/pause.js";
import { createGoal } from "../utils/createGoal.js";
import { visibilityScroll } from "../utils/visibilityScroll.js";


async function huntrGoals(driver) {
    console.log("🚀 Starting it up (don't toucn your mouse during the process)... 🚀");

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
        until.elementLocated(By.xpath('//button[input[@value="Log In"]]')),
        5_000
    );
    await buttonLogin.click();

    const menuGoals = await driver.wait(
        until.elementLocated(By.xpath('//p[text()="Goals"]')),
        10_000
    );
    await driver.wait(until.elementIsVisible(menuGoals), 10_000);
    await menuGoals.click();

    console.log("💃 Just sit back as it's doing its thing... 🕺");

    const goalsArray = ["Universal Goal #1", "Universal Goal #2", "Universal Goal #2", "Universal Goal #3", "Universal Goal #4", "Universal Goal #5", "Universal Goal #6", "Universal Goal #7", "Universal Goal #8"];

    for (let goal of goalsArray) {
        const currentGoalButtonXpath = `//div[contains(@class, "UserGoalBox__BoxSection-sc-otbafz-2")][.//p[contains(text(), "${goal}")]]//div[contains(@class, "AddButtonSquare-sc-n85sy6-0")]`;

        const currentGoalButton = await driver.wait(
            until.elementLocated(By.xpath(currentGoalButtonXpath)),
            5_000
        );
        await driver.wait(until.elementIsVisible(currentGoalButton), 10_000);

        if (goal === "Universal Goal #1") {
            await visibilityScroll(driver, currentGoalButton);

            for (let i = 0; i < 10; i++) {
                await createGoal(driver, currentGoalButton);
            }

        } else if (goal === "Universal Goal #2") {
            await visibilityScroll(driver, currentGoalButton);

            for (let i = 0; i < 15; i++) {
                await createGoal(driver, currentGoalButton);
            }

        } else if (goal === "Universal Goal #3") {
            await visibilityScroll(driver, currentGoalButton);

            for (let i = 0; i < 15; i++) {
                await createGoal(driver, currentGoalButton);
            }

        } else if (goal === "Universal Goal #4") {
            await visibilityScroll(driver, currentGoalButton);

            for (let i = 0; i < 1; i++) {
                await createGoal(driver, currentGoalButton);
            }

        } else if (goal === "Universal Goal #5") {
            await visibilityScroll(driver, currentGoalButton);

            for (let i = 0; i < 5; i++) {
                await createGoal(driver, currentGoalButton);
            }

        } else if (goal === "Universal Goal #6") {
            await visibilityScroll(driver, currentGoalButton);

            for (let i = 0; i < 3; i++) {
                await createGoal(driver, currentGoalButton);
            }

        } else if (goal === "Universal Goal #7") {
            await visibilityScroll(driver, currentGoalButton);

            for (let i = 0; i < 1; i++) {
                await createGoal(driver, currentGoalButton);
            }

        } else if (goal === "Universal Goal #8") {
            await visibilityScroll(driver, currentGoalButton);

            for (let i = 0; i < 2; i++) {
                await createGoal(driver, currentGoalButton);
            }
        }
    }

    console.log("🏁  Congrats, you've finished all goals for the week! 🏁");
    await pause(3_000);
}


export { huntrGoals }
