const panels = document.querySelectorAll(".panel");
panels.forEach(function (panel) {
  panel.addEventListener("click", function (e) {
    panels.forEach(function (panel1) {
      panel1.classList.remove("panel-active");
    });
    panel.classList.add("panel-active");
  });
});
