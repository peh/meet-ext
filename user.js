// ==UserScript==
// @name     Google Meet Autojoin
// @version  0.0.1
// @description  try to take over the world!
// @author       You
// @match  https://meet.google.com/*
// @grant        none
// ==/UserScript==

(function() {

  if (~document.body.children[0].id.indexOf("error")) {
    window.location.reload();
  } else {
    console.log("looks good")
  }

  setTimeout(() => {
    /**
     }
     * Simulate a click event.
     * @public
     * @param {Element} elem  the element to simulate a click on
     */
    function simulateClick(elem) {
      // Create our event (with options)
      var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      // If cancelled, don't dispatch our event
      var canceled = !elem.dispatchEvent(evt);
    }

    // set name in input
    //     const nameInput = document.getElementsByTagName('input')[0];

    // nameInput.value = atob(new URLSearchParams(window.location.search).get("r"));
    // nameInput.blur();

    // get join meeting button:
    const joinButton = Array.from(document.querySelectorAll('[role="button"]')).filter(el => el.textContent.toLowerCase().includes('join') || el.textContent.toLowerCase().includes('teilnahme'))[0];

    // joinButton.removeAttribute('aria-disabled');
    // joinButton.classList.remove('RDPZE');

    setTimeout(() => {

      simulateClick(joinButton);
    }, 1500);
  }, 3000);

  setInterval(() => {
    const closeButton = Array.from(document.getElementsByTagName('span')).filter(el => el.textContent.toLowerCase().includes('return to'))[0];
    if (closeButton) {
      window.close()
    }
  }, 5000)
})();
