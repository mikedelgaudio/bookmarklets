javascript: (function () {
  // Clear localStorage and sessionStorage
  localStorage.clear();
  sessionStorage.clear();

  // Create a countdown overlay
  let countdownOverlay = document.createElement("div");
  countdownOverlay.style.position = "fixed";
  countdownOverlay.style.top = "0";
  countdownOverlay.style.left = "0";
  countdownOverlay.style.width = "100%";
  countdownOverlay.style.height = "100%";
  countdownOverlay.style.backgroundColor = "#000";
  countdownOverlay.style.display = "flex";
  countdownOverlay.style.justifyContent = "center";
  countdownOverlay.style.alignItems = "center";
  countdownOverlay.style.zIndex = "9999";
  countdownOverlay.style.color = "#fff";
  countdownOverlay.style.fontSize = "50px";
  countdownOverlay.style.fontFamily = "Comic Sans MS, sans-serif";
  countdownOverlay.innerHTML =
    'Reloading in <span id="countdown">3</span> seconds...';
  document.body.appendChild(countdownOverlay);

  // Fun background color changes
  let colors = ["#ff69b4", "#00ffff", "#ff4500", "#9400d3", "#32cd32"];
  let colorIndex = 0;
  setInterval(function () {
    countdownOverlay.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 500); // Change color every 0.5 seconds

  // Countdown function
  let countdownNumber = 3;
  let countdownInterval = setInterval(function () {
    countdownNumber--;
    document.getElementById("countdown").textContent = countdownNumber;
    if (countdownNumber === 0) {
      clearInterval(countdownInterval);
      location.reload();
    }
  }, 1000);

  // Nyan Cats generator
  function createNyanCat() {
    let nyanCat = document.createElement("img");
    nyanCat.src = "https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif"; // Nyan Cat GIF
    nyanCat.style.position = "fixed";
    nyanCat.style.top = Math.random() * window.innerHeight + "px";
    nyanCat.style.left = "-150px";
    nyanCat.style.width = "100px";
    nyanCat.style.zIndex = "10000";
    nyanCat.style.transition = "left 3s linear";
    document.body.appendChild(nyanCat);

    setTimeout(function () {
      nyanCat.style.left = window.innerWidth + "px"; // Move Nyan Cat across the screen
      setTimeout(function () {
        nyanCat.remove(); // Remove Nyan Cat after it exits the screen
      }, 3000); // Nyan Cat takes 3 seconds to scroll across
    }, 100);
  }

  // Generate random Nyan Cats every second
  let nyanCatInterval = setInterval(createNyanCat, 1000);

  // Stop generating Nyan Cats after 3 seconds
  setTimeout(function () {
    clearInterval(nyanCatInterval);
  }, 3000);
})();
