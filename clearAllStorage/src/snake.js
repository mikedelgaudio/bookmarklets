javascript: (function () {
  function d(f) {
    ctx.fillStyle = "colorStr";
    ctx.fillRect(0, 0, a, b / 20);
    ctx.fillRect(0, 0, a / 30, b);
    ctx.fillRect(0, (19 * b) / 20, a, b / 20);
    ctx.fillRect((29 * a) / 30, 0, a / 30, b);
  }
  function e() {
    ctx.clearRect(0, 0, a, b / 20);
    ctx.clearRect(0, 0, a / 30, b);
    ctx.clearRect(0, (19 * b) / 20, a, b / 20);
    ctx.clearRect((29 * a) / 30, 0, a / 30, b);
  }
  var c = document.createElement("canvas"),
    a = window.innerWidth,
    b = window.innerHeight;
  c.width = a;
  c.height = b;
  document.body.appendChild(c);
  c.style.position = "absolute";
  c.style.top = "0px";
  c.style.left = "0px";
  ctx = c.getContext("2d");
  d("black");
  setTimeout(function () {
    e();
    setTimeout(function () {
      d("black");
      setTimeout(function () {
        e();
        setTimeout(function () {
          d("black");
          setTimeout(function () {
            window.open(
              "https:////dev.92spoons.com/sub/YouHaveBeenHacked.html",
              "_blank"
            );
            document.body.removeChild(c);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }, 100);
})();
