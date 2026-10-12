// Phone menu toggle
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

// Keep the footer year current
(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

// Contact form: no server needed. Builds an email to the address in the
// form's data-mailto attribute and opens the visitor's mail app.
// (To collect submissions without email, give the <form> an action="" pointing
// at a form service such as Formspree, and this script steps aside.)
(function () {
  var forms = document.querySelectorAll("form[data-mailto]");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      if (form.getAttribute("action")) return;
      e.preventDefault();
      var to = form.getAttribute("data-mailto");
      var subject = form.getAttribute("data-subject") || "Website enquiry";
      var lines = [];
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
