// this function will check at regular intervals of 2 seconds if any ad has appeared, search for its class name, and click their respective close button
setInterval(function () {
  // for banner type overlay ads
  let overlayAd = document.getElementsByClassName(
    "ytp-ad-overlay-close-container"
  )[0];
  if (overlayAd != undefined) overlayAd.click();
  // for proper ads whose skip button appears after 5 seconds
  let skipBtn = document.getElementsByClassName("ytp-ad-skip-button")[0];
  if (skipBtn != undefined) skipBtn.click();
}, 2000);
