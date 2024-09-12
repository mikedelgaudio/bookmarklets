javascript: (function () {
  // Clear localStorage and sessionStorage
  localStorage.clear();
  sessionStorage.clear();

  // Create a BSOD-style overlay
  let bsodOverlay = document.createElement("div");
  bsodOverlay.style.position = "fixed";
  bsodOverlay.style.top = "0";
  bsodOverlay.style.left = "0";
  bsodOverlay.style.width = "100%";
  bsodOverlay.style.height = "100%";
  bsodOverlay.style.backgroundColor = "#0000aa"; // Classic BSOD blue
  bsodOverlay.style.color = "#ffffff";
  bsodOverlay.style.display = "flex";
  bsodOverlay.style.flexDirection = "column";
  bsodOverlay.style.justifyContent = "center";
  bsodOverlay.style.alignItems = "center";
  bsodOverlay.style.fontFamily = "Lucida Console, Courier, monospace";
  bsodOverlay.style.fontSize = "22px";
  bsodOverlay.style.zIndex = "9999";
  bsodOverlay.innerHTML = `
        <div>
            <span>No problem has been detected, and your page has been shut down to prevent further coding.</span>
            <br/><br/>
            <span>If this is the first time you've seen this stop error screen, don't panic.</span>
            <br/><br/>
            <span>Technical Information:</span>
            <br/>
            <span>*** STOP: 0x0000005D (0x12345678, 0x00000000, 0x00000000, 0x00000000)</span>
            <br/><br/>
            <span>DEV_SAID_TO_NUKE_THE_PAGE</span>
            <br/><br/>
            <span id="countdown">3</span> seconds until page restart...
            <br/><br/>
            <span>Collecting diagnostic data...</span>
        </div>`;
  document.body.appendChild(bsodOverlay);

  // Countdown function for BSOD
  let countdownNumber = 3;
  let countdownInterval = setInterval(function () {
    countdownNumber--;
    document.getElementById("countdown").textContent = countdownNumber;
    if (countdownNumber === 0) {
      clearInterval(countdownInterval);
      location.reload();
    }
  }, 1000);

  // Add a fun fake "error message" to simulate real BSOD randomness
  let errorMessages = [
    "Checking your RAM for issues...",
    "Error 0x000000DEAD: Ghosts in the machine",
    "Unexpected Windows behavior... But when is it expected?",
    "Clippy detected but cannot assist at this time",
    "Turning it off and on again is not an option",
  ];

  setTimeout(function () {
    let errorMsg = document.createElement("div");
    errorMsg.style.color = "#ff0000"; // Red for the error message
    errorMsg.style.fontSize = "18px";
    errorMsg.style.marginTop = "20px";
    errorMsg.textContent =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];
    bsodOverlay.appendChild(errorMsg);
  }, 1500); // Show the fake error after 1.5 seconds
})();
