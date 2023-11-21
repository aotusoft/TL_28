if (document.getElementById("evanyou")) {
    var n,
      i = function () {
        for (
          a.clearRect(0, 0, u, c),
            n = [
              { x: 0, y: 0.7 * c + h },
              { x: 0, y: 0.7 * c - h },
            ];
          n[1].x < u + h;
  
        )
          r(n[0], n[1]);
      },
      r = function (t, e) {
        a.beginPath(), a.moveTo(t.x, t.y), a.lineTo(e.x, e.y);
        var i = e.x + (2 * v() - 0.25) * h,
          r = o(e.y);
        a.lineTo(i, r),
          a.closePath(),
          (f -= p / -50),
          (a.fillStyle =
            "#" +
            (
              ((127 * m(f) + 128) << 16) |
              ((127 * m(f + p / 3) + 128) << 8) |
              (127 * m(f + (p / 3) * 2) + 128)
            ).toString(16)),
          a.fill(),
          (n[0] = n[1]),
          (n[1] = { x: i, y: r });
      },
      o = function t(e) {
        var n = e + (2 * v() - 1.1) * h;
        return n > c || n < 0 ? t(e) : n;
      },
      s = document.getElementById("evanyou"),
      a = s.getContext("2d"),
      l = window.devicePixelRatio || 1,
      u = window.innerWidth,
      c = window.innerHeight,
      h = 90,
      d = Math,
      f = 0,
      p = 2 * d.PI,
      m = d.cos,
      v = d.random;
    (s.width = u * l),
      (s.height = c * l),
      a.scale(l, l),
      (a.globalAlpha = 0.6),
      (document.onclick = i),
      (document.ontouchstart = i),
      i();
  }
  