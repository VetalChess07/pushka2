document.addEventListener("DOMContentLoaded", () => {
    const widget = `(function (d, o, m, p, l, a, n) {
      d[l] =
        d[l] ||
        function () {
          (d[l].n = d[l].n || []).push(arguments);
        };
      d[l].l = 1 * new Date();
      (a = o.createElement(m)),
        (n = o.getElementsByTagName(m)[0]),
        (a.async = 1),
        (a.src = p),
        n.parentNode.insertBefore(a, n);
    })(
      window,
      document,
      "script",
      "https://domoplaner.ru/catalog/sw.js",
      "dplanloader"
    );
    dplanloader("set", "444/K5pAGS");`;
  
    const widgetElement = document.createElement("script");
  
    widgetElement.textContent = widget;
  
    document.body.prepend(widgetElement);
  });
  