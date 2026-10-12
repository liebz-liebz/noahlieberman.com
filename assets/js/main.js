// Mobile navigation toggle
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close the menu after tapping a link (e.g. "#newsletter" on the same page)
  links.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

// Show a hairline under the header once the page is scrolled
(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;
  function update() {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
})();

// Keep the footer year current
(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

// Forms: no server needed. A form with data-mailto (and no action) builds an
// email to that address and opens the visitor's mail app.
// Newsletter forms: give the <form> an action="" pointing at your newsletter
// provider's signup URL and it will submit there instead.
(function () {
  var forms = document.querySelectorAll("form[data-mailto]");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      if (form.getAttribute("action")) return; // real form endpoint configured
      e.preventDefault();
      var to = form.getAttribute("data-mailto");
      var isNewsletter = form.hasAttribute("data-newsletter");
      var subject = isNewsletter
        ? "Newsletter signup"
        : form.getAttribute("data-subject") || "Website enquiry";
      var lines = isNewsletter ? ["Please add me to the newsletter."] : [];
      new FormData(form).forEach(function (value, key) {
        if (String(value).trim()) lines.push(key + ": " + value);
      });
      window.location.href =
        "mailto:" + to +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n\n"));
    });
  });
})();
