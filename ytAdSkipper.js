const puppeteer = require("puppeteer");

let gBrowser;
let gPage;

(async function() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
        defaultViewport: null,
        args: ["--start-maximized"],
    });
    gBrowser = browser;
    let pagesArr = await browser.pages();
    gPage = pagesArr[0];
    await gPage.goto("https://www.youtube.com/watch?v=UYulBXIMikg");
    await gPage.waitForSelector(".ytp-large-play-button.ytp-button");
    await gPage.click(".ytp-large-play-button.ytp-button");

    // get total duration of the video
    // keep checking for skip ad button for the whole duration at regular intervals (possible?)
    // if button found, click it
})();