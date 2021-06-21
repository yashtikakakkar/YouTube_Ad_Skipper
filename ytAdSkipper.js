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

    await gPage.evaluate(async function() {

        let interval = setInterval(function() {
            let overlayAd = document.getElementsByClassName("ytp-ad-overlay-close-container")[0];
            if (overlayAd != undefined)
                overlayAd.click();

            let skipBtn = document.getElementsByClassName("ytp-ad-skip-button")[0];
            if (skipBtn != undefined)
                skipBtn.click();
        }, 2000);

    })
})();