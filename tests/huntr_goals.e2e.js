import { By } from "selenium-webdriver";


async function huntrGoals(driver) {
    await driver.get("https://huntr.co/track/goals/current");

    function pause(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await pause(5000);


    console.log("Hello there!");
}


export { huntrGoals }
