export async function visibilityScroll(driver, currentGoalButton) {
    const isVisible = await driver.executeScript(
        "const rect = arguments[0].getBoundingClientRect();" +
        "return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));",
        currentGoalButton
    );

    if (!isVisible) {
        await driver.executeScript(
            "arguments[0].scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'});",
            currentGoalButton
        );
    }
}
